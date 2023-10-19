
const express = require('express');
const cors = require('cors');
const stripe = require('stripe');

const app = express();
app.use(cors());
app.use(express.static("../public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item)=> {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        });
    });

    // below is a test data manually created on Stripe dashboard
    const stripeClient = stripe('sk_test_51LnUKJDM1jwCEz8OJG69szv032rIo4X0WrFMaXrqxu9g8fdohsL1y54JEUhFUKrqoBquVjN3AzpIFyrbN915bgcd00O5hqoGCJ');

    const session = await stripeClient.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel"
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));
