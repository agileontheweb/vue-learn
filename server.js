// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

// The library needs to be configured with your account's secret key.
// Ensure the key is kept out of any version control system you might be using.
const stripe = require('stripe')('sk_test_51NpqzhBI9AUPHPQbGd3Ac7fNHJd1jNzplYWWJxjcAqQmQ8uZFPpvkEMYfrpECNymF2PgCd6MsYoCebeZEkx6eymx00ZXNYXdiB');
const express = require('express');
const app = express();


// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_513ac61d5049b2b4974a07ac6a15832514247fafe4f615891b69cef2f66a9ec0";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});

app.listen(4242, () => console.log('Running on port 4242'));

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const stripe = require('stripe')('sk_test_51NpqzhBI9AUPHPQbGd3Ac7fNHJd1jNzplYWWJxjcAqQmQ8uZFPpvkEMYfrpECNymF2PgCd6MsYoCebeZEkx6eymx00ZXNYXdiB');

// // Usa bodyParser per analizzare il corpo della richiesta JSON
// app.use(bodyParser.json());

// // Gestisci l'endpoint Webhook di Stripe
// app.post('/stripe_webhooks', async (req, res) => {
//   const payload = req.body;
//   const sigHeader = req.headers['stripe-signature'];

//   try {
//     const event = stripe.webhooks.constructEvent(payload, sigHeader, 'YOUR_STRIPE_WEBHOOK_SECRET');

//     // Ora puoi gestire l'evento in base al suo tipo
//     switch (event.type) {
//       case 'payment_intent.succeeded':
//         // Gestisci il pagamento riuscito
//         console.log('Pagamento riuscito:', event.data.object);
//         break;
//       case 'payment_intent.payment_failed':
//         // Gestisci il pagamento fallito
//         console.log('Pagamento fallito:', event.data.object);
//         break;
//       // Altri casi per altri tipi di eventi
//     }

//     // Restituisci una risposta di successo
//     res.status(200).end();
//   } catch (error) {
//     console.error('Errore nella gestione dell\'evento Stripe:', error);
//     res.status(400).end();
//   }
// });

// // Avvia il server
// app.listen(3000, () => {
//   console.log('Server in ascolto sulla porta 3000');
// });


//  

// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const stripe = require('stripe')('sk_test_51NpqzhBI9AUPHPQbGd3Ac7fNHJd1jNzplYWWJxjcAqQmQ8uZFPpvkEMYfrpECNymF2PgCd6MsYoCebeZEkx6eymx00ZXNYXdiB');

// app.use(cors());
// app.use(bodyParser.json());

// // Endpoint per inizializzare una sessione di pagamento con Stripe
// app.post('/create-payment', async (req, res) => {
//   try {
//     const { amount, lineItems } = req.body;

//     // Crea una sessione di pagamento con Stripe
//     const session = await stripe.checkout.sessions.create({
//       payment_method_types: ['card'],
//       line_items: lineItems,
//       mode: 'payment',
//       success_url: 'http://localhost:5173/success', // URL di successo dopo il pagamento
//       cancel_url: 'http://localhost:5173/cancel',   // URL di annullamento
//     });

//     // Restituisci il clientSecret generato dalla sessione di pagamento
//     res.json({ clientSecret: session.client_secret });
//   } catch (error) {
//     console.error('Errore durante la creazione della sessione di pagamento:', error);
//     res.status(500).json({ error: 'Errore durante la creazione della sessione di pagamento' });
//   }
// });

// const PORT = process.env.PORT || 5173;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
