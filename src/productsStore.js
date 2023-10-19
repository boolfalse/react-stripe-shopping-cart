
// below is a test data manually created on Stripe dashboard
const productsArray = [
    {
        id: "price_1LnUTFDM1jwCEz8OGoOSXiSM",
        title: "Coffee",
        price: 10,
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Sunglasses",
        price: 20,
    },
    {
        id: "price_1LnUUoDM1jwCEz8OvxIcJ7to",
        title: "Camera",
        price: 30,
    },
];

function getProduct(id) {
    const product = productsArray.find(p => p.id === id);
    if (!product) {
        console.log('Product not found!');
        // throw new Error('Product not found!');
        return null;
    }
    return product;
}

export {
    productsArray,
    getProduct
};
