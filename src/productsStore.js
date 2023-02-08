
const productsArray = [
    {
        id: 1,
        title: 'Product 1',
        price: 10,
        // description: 'This is product 1',
        // image: 'https://picsum.photos/200/300'
    },
    {
        id: 2,
        title: 'Product 2',
        price: 20,
    },
    {
        id: 3,
        title: 'Product 3',
        price: 30,
    },
    {
        id: 4,
        title: 'Product 4',
        price: 40,
    },
    {
        id: 5,
        title: 'Product 5',
        price: 50,
    },
    {
        id: 6,
        title: 'Product 6',
        price: 60,
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
