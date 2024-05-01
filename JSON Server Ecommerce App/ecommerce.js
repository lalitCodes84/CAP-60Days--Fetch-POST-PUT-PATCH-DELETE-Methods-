// JavaScript code here
const userInfo = document.getElementById('user-info');
const productsContainer = document.getElementById('products');

// Function to display user info
function displayUserInfo(user) {
    userInfo.innerHTML = <p>Welcome, ${user.name}!</p>;
}

// Function to display products
function displayProducts(products) {
    productsContainer.innerHTML = '';
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.src}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>Price: ${product.price}</p>
            <p>Rating: ${product.ratings}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
            <button onclick="deleteFromCart(${product.id})">Delete from Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

// Function to fetch products from JSON server
async function getProducts() {
    try {
        const response = await fetch('http://localhost:3000/products');
        const products = await response.json();
        displayProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Function to fetch user data from JSON server
async function getUserData(userId) {
    try {
        const response = await fetch(`http://localhost:3000/users/${userId}`);
        const user = await response.json();
        displayUserInfo(user);
    } catch (error) {
        console.error('Error fetching user data:', error);
    }
}

// Function to add a product to the cart
async function addToCart(productId) {
    // Implement adding to cart functionality
    console.log('Adding product with ID', productId, 'to cart...');
}

// Function to delete a product from the cart
async function deleteFromCart(productId) {
    // Implement deleting from cart functionality
    console.log('Deleting product with ID', productId, 'from cart...');
}

// Initialize the app
getProducts();
getUserData(1); // Assuming user ID 1 is logged in