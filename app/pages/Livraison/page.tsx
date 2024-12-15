'use client';

import { CodePromo } from '@/components/CodePromo';
import { Footer } from '@/components/Footer';
import { useState } from 'react';
import { montserratFont } from '../../fonts/font';
import Image from 'next/image';
import Link from 'next/link';

const FormulaireLivraison = () => {
  const [recipient, setRecipient] = useState({
    name: '',
    address1: '',
    city: '',
    zipCode: '',
    phone: '',
    email: '',
    country: 'FR',
  });
  {/* rendre le poid et la taille interactif, en fonction de la formule choisi ca change */}
  {/* le code produit a ete envoye par mail */}
  const [parcelDetails] = useState({ service: '0', productCode: '6A', as: 'A02', weight: 3 });
  const [label, setLabel] = useState('');

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

  return (
    <div>
      <CodePromo />
      <div className='flex flex-col justify-center items-center h-[calc(100vh-9rem)] relative'>
        <div>
          <h1 className='text-4xl mb-5 text-[#004339]'>Formulaire de livraison</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Nom du destinataire"
                value={recipient.name}
                onChange={(e) => setRecipient({ ...recipient, name: e.target.value })}
                className={`text-[#009874] text-xl bg-[#B0D8C1] placeholder:text-[#009874] placeholder:opacity-75 rounded-xl w-[700px] h-12 pl-4 my-2 focus:outline-none focus:ring-2 focus:ring-[#009874] ${montserratFont.className}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Adresse"
                value={recipient.address1}
                onChange={(e) => setRecipient({ ...recipient, address1: e.target.value })}
                className={`text-[#009874] text-xl bg-[#B0D8C1] placeholder:text-[#009874] placeholder:opacity-75 rounded-xl w-[700px] h-12 pl-4 my-2 focus:outline-none focus:ring-2 focus:ring-[#009874] ${montserratFont.className}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Ville"
                value={recipient.city}
                onChange={(e) => setRecipient({ ...recipient, city: e.target.value })}
                className={`text-[#009874] text-xl bg-[#B0D8C1] placeholder:text-[#009874] placeholder:opacity-75 rounded-xl w-[700px] h-12 pl-4 my-2 focus:outline-none focus:ring-2 focus:ring-[#009874] ${montserratFont.className}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Code postal"
                value={recipient.zipCode}
                onChange={(e) => setRecipient({ ...recipient, zipCode: e.target.value })}
                className={`text-[#009874] text-xl bg-[#B0D8C1] placeholder:text-[#009874] placeholder:opacity-75 rounded-xl w-[700px] h-12 pl-4 my-2 focus:outline-none focus:ring-2 focus:ring-[#009874] ${montserratFont.className}`}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Numéro de téléphone"
                value={recipient.phone}
                onChange={(e) => setRecipient({ ...recipient, phone: e.target.value })}
                className={`text-[#009874] text-xl bg-[#B0D8C1] placeholder:text-[#009874] placeholder:opacity-75 rounded-xl w-[700px] h-12 pl-4 my-2 focus:outline-none focus:ring-2 focus:ring-[#009874] ${montserratFont.className}`}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={recipient.email}
                onChange={(e) => setRecipient({ ...recipient, email: e.target.value })}
                className={`text-[#009874] text-xl bg-[#B0D8C1] placeholder:text-[#009874] placeholder:opacity-75 rounded-xl w-[700px] h-12 pl-4 my-2 focus:outline-none focus:ring-2 focus:ring-[#009874] ${montserratFont.className}`}
              />
            </div>
            <Link href='https://buy.stripe.com/test_3cs9Ew5xy9HA0dWbIK'>
              <button onClick={handleSubmit} className='bg-[#E30613] text-white text-xl rounded-xl py-3 px-8 mt-4'>
                Enregistrer
              </button>
            </Link>
          </form>
          <Image 
            src='/camion-livraison.svg' 
            alt='camion livraison viande carnicru' 
            width={200} 
            height={200} 
            className="absolute bottom-5 right-56"
          />
        </div>

        {/* Pour visioner la requete post envoyé - trouver un moyen de l'envoyer par mail a sitealacarte49@gmail.com a chaque fois qu'un client rentre les informations de livraison
          En revanche attendre que le client est validé le payment, trouver un system où il faut attendre la confirmation du payment pour imprimer l'etiquette pour envoyer la livraison
        {label && (
          <div>
            <h2>Étiquette générée</h2>
            <pre>{label}</pre>
          </div>
        )}*/}
      </div>
    </div>
  );
};

export default FormulaireLivraison;
