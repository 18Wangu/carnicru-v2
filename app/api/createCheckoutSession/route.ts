import { NextRequest, NextResponse } from 'next/server';

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(req: NextRequest) {
  try {
    const { prix } = await req.json(); // Récupère le prix envoyé depuis le client
    const amount = Math.round(parseFloat(prix) * 100); // Convertit en centimes avec arrondi

    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: 'Prix invalide' }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'eur', // Devise
            product_data: {
              name: 'Commande personnalisée', // Nom du produit affiché dans Stripe
            },
            unit_amount: amount, // Montant en centimes
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/?success=true`,
      cancel_url: `${req.headers.get('origin')}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    console.error('Erreur Stripe :', err.message);
    return NextResponse.json({ error: err.message }, { status: err.statusCode || 500 });
  }
}
