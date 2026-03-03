// script.js

// Secure JavaScript functionality for product management, shopping cart, checkout, and admin authentication 

// Product Management 
const products = [];

function addProduct(product) {
    // Add product validation here (e.g., checking for duplicates, valid data)
    products.push(product);
}

function removeProduct(productId) {
    // Implement secure removal mechanism
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        products.splice(index, 1);
    }
}

// Shopping Cart 
const cart = [];

function addToCart(productId) {
    // Ensure product exists before adding to cart
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
    }
}

function checkout() {
    // Implement secure checkout process, e.g., payment processing
    if (cart.length === 0) {
        throw new Error('Cart is empty.');
    }
    // Process payment and clear cart after successful transaction
}

// Admin Authentication 
let loggedInAdmin = null;

function adminLogin(username, password) {
    // Validate admin credentials securely (consider using hash comparison)
    if (username === 'admin' && password === 'securepassword123') {
        loggedInAdmin = username;
    } else {
        throw new Error('Invalid credentials.');
    }
}

function adminLogout() {
    loggedInAdmin = null;
}

// Export functions for use in other modules
export { addProduct, removeProduct, addToCart, checkout, adminLogin, adminLogout };