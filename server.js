// // This is your test secret API key.
// const stripe = require('stripe')('sk_test_51NpqzhBI9AUPHPQbGd3Ac7fNHJd1jNzplYWWJxjcAqQmQ8uZFPpvkEMYfrpECNymF2PgCd6MsYoCebeZEkx6eymx00ZXNYXdiB');
// const express = require('express');
// const app = express();
// app.use(express.static('public'));

// const YOUR_DOMAIN = 'http://localhost:4242';

// app.post('/create-checkout-session', async (req, res) => {
//   const session = await stripe.checkout.sessions.create({
//     line_items: [
//       {
//         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//         price: 'price_1NqDNPBI9AUPHPQbG23kVMQz',
//         quantity: 1,
//       },
//     ],
//     mode: 'payment',
//     success_url: `${YOUR_DOMAIN}?success=true`,
//     cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//   });

//   res.redirect(303, session.url);
// });

// app.listen(4242, () => console.log('Running on port 4242'));