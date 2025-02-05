'use client';

//import { CodePromo } from '@/components/CodePromo';
import { useState } from 'react';
import { montserratFont } from '../../fonts/font';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

interface Recipient {
  name: string;
  address1: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  country: string;
}

interface ParcelDetails {
  service: string;
  productCode: string;
  as: string;
  weight: number;
}

const FormulaireLivraison = () => {
  const [recipient, setRecipient] = useState<Recipient>({
    name: '',
    address1: '',
    city: '',
    zipCode: '',
    phone: '',
    email: '',
    country: 'FR',
  });
  const [parcelDetails] = useState<ParcelDetails>({ service: '0', productCode: '6A', as: 'A02', weight: 3 });
  //const [label, setLabel] = useState<string>('');
  const searchParams = useSearchParams();
  const prix = searchParams.get("prix"); // Récupère le prix depuis l'URL
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  {/* 
  const handleSubmit = async () => {
    const response = await fetch('/api', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },   
      body: JSON.stringify({ recipient, parcelDetails }),
    });

    const data = await response.json();

    if (data.success) {
      setLabel(data.label); // Affichez ou téléchargez l'étiquette
    } else {
      console.error(data.message);
    }
  };
  */}

  {/* 
  const extractPdfLabel = (data: string) => {
    const regex = /<pdfEtiquette>([\s\S]*?)<\/pdfEtiquette>/; // Utilisation de 's' pour gérer les retours à la ligne
    const match = data.match(regex);
    return match ? match[1] : ''; // Renvoie la portion entre les balises, ou une chaîne vide si rien n'est trouvé
  };
  */}

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    Object.entries(recipient).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = `Veuillez renseigner votre ${key === 'address1' ? 'adresse' : key == 'city' ? 'ville' : key === 'zipCode' ? 'code postal' : key === 'phone' ? 'numéro de téléphone' : key}.`;
      }
    });

    // Vérification du format du numéro de téléphone (10 chiffres, uniquement des nombres)
    const phoneRegex = /^\d{10}$/;
    if (!recipient.phone.match(phoneRegex)) {
      newErrors.phone = 'Numéro de téléphone invalide.';
    }

    // Vérification du format de l'adresse e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!recipient.email.match(emailRegex)) {
      newErrors.email = 'Adresse e-mail invalide.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitPrix = async () => {
    if (!validateForm()) return;

    try {
      if (!prix) {
        alert('Prix non défini ou incorrect.');
        return;
      }

      // Étape 1 : Générer l'étiquette
      const responseLabel = await fetch('/api', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipient, parcelDetails }),
      });

      const dataLabel = await responseLabel.json();

      if (dataLabel.success) {
        const labelGenerated = dataLabel.label;

        // Extraction de la partie entre <pdfEtiquette> et </pdfEtiquette>
        //const extractedLabel = extractPdfLabel(labelGenerated);

        // Étape 2 : Envoyer l'étiquette par e-mail
        const emailResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ label: labelGenerated, recipient }),
        });

        if (!emailResponse.ok) {
          console.error('Erreur lors de l envoi de l e-mail.');
        }

        // Étape 3 : Rediriger vers Stripe Checkout
        const responseStripe = await fetch('/api/createCheckoutSession', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prix }),
        });

        const dataStripe = await responseStripe.json();

        if (dataStripe.url) {
          window.location.href = dataStripe.url;
        } else {
          console.error('Erreur lors de la création de la session de paiement :', dataStripe.error);
        }
      } else {
        console.error('Erreur lors de la génération de l étiquette :', dataLabel.message);
      }
    } catch (error) {
      console.error('Erreur lors du paiement Stripe :', error);
    }
  };

  return (
    <div>
      {/*<CodePromo />*/}
      <div className='flex flex-col justify-center items-center h-[calc(100vh-9rem)] relative'>
        <div>
          <h1 className='text-4xl mb-5 text-[#004339]'>Formulaire de livraison</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            {[
              { field: 'name', placeholder: 'Nom du destinataire' },
              { field: 'address1', placeholder: 'Adresse' },
              { field: 'city', placeholder: 'Ville' },
              { field: 'zipCode', placeholder: 'Code postal' },
              { field: 'phone', placeholder: 'Numéro de téléphone' },
              { field: 'email', placeholder: 'Email', type: 'email' },
            ].map(({ field, placeholder, type = 'text' }) => (
              <div key={field}>
                <input
                  type={type}
                  placeholder={placeholder}
                  value={recipient[field as keyof Recipient]}
                  onChange={(e) => {
                    const value = e.target.value;
                    setRecipient({ ...recipient, [field]: value });
                  
                    // Recalcul des erreurs après chaque modification
                    setErrors((prevErrors) => {
                      const newErrors = { ...prevErrors };
                      if (value.trim()) {
                        delete newErrors[field];
                      } else {
                        newErrors[field] = `Veuillez renseigner votre ${field}.`;
                      }
                  
                      // Vérifie le format du téléphone
                      if (field === 'phone' && !/^\d{10}$/.test(value)) {
                        newErrors.phone = 'Numéro de téléphone invalide.';
                      }
                  
                      // Vérifie le format de l'email
                      if (field === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                        newErrors.email = 'Adresse e-mail invalide.';
                      }
                  
                      return newErrors;
                    });
                  }}                  
                  className={`text-[#009874] text-xl bg-[#B0D8C1] placeholder:text-[#009874] placeholder:opacity-75 rounded-xl w-[700px] h-12 pl-4 my-2 focus:outline-none focus:ring-2 focus:ring-[#009874] ${montserratFont.className}`}
                />
                {errors[field] && <p className="text-red-600 text-sm">{errors[field]}</p>}
              </div>
            ))}
            
            {/* Bouton pour Stripe */}
            <button
              onClick={handleSubmitPrix}
              disabled={Object.keys(errors).length > 0} // Désactivé si erreurs
              className={`bg-[#E30613] text-white text-xl rounded-xl py-3 px-8 mt-4 
                          ${Object.keys(errors).length > 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Payer {prix ? `${prix}` : ''}
            </button>

            {/* 
            <button onClick={handleSubmit} className='bg-black text-white mt-4'>
              Générer une étiquette
            </button>
            */}
            
          </form>
          <Image
            src='/camion-livraison.svg'
            alt='camion livraison viande carnicru'
            width={200}
            height={200}
            className="absolute bottom-5 right-48"
          />
        </div>

        {/* Envoyer ce label par mail grace a resend */}
        
        {/* 
        {label && (
          <div>
            <h2 className='text-green-500'>Étiquette générée</h2>
            <pre className='w-96 text-blue-800'>{label}</pre>
            <pre className='w-96 text-red-800'>{extractPdfLabel(label)}</pre>
          </div>
        )}
        */}
      </div>
    </div>
  );
};

export default FormulaireLivraison;
