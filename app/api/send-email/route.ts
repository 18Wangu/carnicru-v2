// api/send-email/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY as string); // Utilisez votre clé API Resend

// Définir les types pour le corps de la requête
interface Recipient {
  name: string;
  address1: string;
  city: string;
  zipCode: string;
  phone: string;
  email: string;
  country: string;
}

interface EmailRequestBody {
  label: string;
  recipient: Recipient;
}

// Fonction pour extraire le contenu entre les balises <pdfEtiquette>
const extractPdfLabel = (data: string) => {
  const regex = /<pdfEtiquette>([\s\S]*?)<\/pdfEtiquette>/; // Gestion des retours à la ligne
  const match = data.match(regex);
  return match ? match[1] : ''; // Renvoie le contenu ou une chaîne vide si rien n'est trouvé
};

export async function POST(request: Request) {
  try {
    const body: EmailRequestBody = await request.json();

    const { label, recipient } = body;

    if (!label || !recipient) {
      return new Response(JSON.stringify({ error: 'Informations manquantes.' }), { status: 400 });
    }

    // Extraire uniquement le contenu entre les balises <pdfEtiquette>
    const extractedLabel = extractPdfLabel(label);

    // Si le contenu extrait est vide, renvoyer une erreur
    if (!extractedLabel) {
      return new Response(JSON.stringify({ error: 'Étiquette non valide.' }), { status: 400 });
    }

    const toEmails = ['sitealacarte49@gmail.com', 'carnicru@outlook.fr'];

    await resend.emails.send({
      from: 'Theo <contact@theopremartin.com>',
      to: toEmails,
      subject: 'Nouvelle étiquette de livraison générée',
      html: `
        <h1>Nouvelle étiquette générée</h1>
        <p>Voici les informations du destinataire :</p>
        <ul>
          <li><strong>Nom :</strong> ${recipient.name}</li>
          <li><strong>Adresse :</strong> ${recipient.address1}, ${recipient.city}, ${recipient.zipCode}, ${recipient.country}</li>
          <li><strong>Téléphone :</strong> ${recipient.phone}</li>
          <li><strong>Email :</strong> ${recipient.email}</li>
        </ul>
        <p>Étiquette :</p>
        <pre>${extractedLabel}</pre>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Erreur lors de l envoi de l e-mail :', error);
    return new Response(JSON.stringify({ error: 'Erreur lors de l envoi de l e-mail.' }), { status: 500 });
  }
}
