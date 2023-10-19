
## React.js shopping cart with Stripe



#### About:

**React.js shopping cart with Stripe** is a simple shopping cart app built with React.js and Stripe API.


#### Installation:

- Clone the repository and install dependencies:
```bash
git clone git@github.com:boolfalse/react-stripe-shopping-cart.git
cd react-stripe-shopping-cart
npm install
```

- Stripe:
- - Grab Secret API key from [Stripe Dashboard](https://dashboard.stripe.com/test/apikeys).
- - In `server/server.js` paste API key into `const stripeClient = stripe('sk_test_...');`.
- - Make sure to have [Company name](https://dashboard.stripe.com/account) set.
- - Manually create products (with prices) and get their IDs.
- - In `src/productsStore.js` paste products IDs into `productsArray`.

- Run the server:
```bash
cd server && npm run start
```

- Run the app:
```bash
npm run start
```


#### Resources:

- [Traversy Media | Build a Shopping Cart With React JS & Stripe | Oct 18, 2022](https://www.youtube.com/watch?v=_8M-YVY76O8)
- [coopercodes/ReactEcommerceStoreWithStripeAPI](https://github.com/coopercodes/ReactEcommerceStoreWithStripeAPI)
