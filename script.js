// JavaScript code for Product Management, Shopping Cart, Admin Authentication, and more

// Product Management
let products = [];

function addProduct(name, price) {
    // Input validation
    if (!name || price <= 0) {
        console.error('Invalid product details.');
        return;
    }
    const product = { id: Date.now(), name: escapeHtml(name), price: price };
    products.push(product);
    notify('Product added successfully.');
}

function removeProduct(id) {
    products = products.filter(product => product.id !== id);
    notify('Product removed successfully.');
}

function listProducts() {
    return products;
}

// Shopping Cart
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingProduct = cart.find(item => item.product.id === productId);
        if (existingProduct) {
            existingProduct.quantity += 1;
        } else {
            cart.push({ product: product, quantity: 1 });
        }
        notify('Product added to cart.');
    }
}

function checkout() {
    if (cart.length === 0) {
        notify('Cart is empty.');
        return;
    }
    // Proceed with checkout logic
    // Clear cart after checkout
    cart = [];
    notify('Checkout successful.');
}

// Admin Authentication
let adminUser = { username: 'admin', password: 'securepassword' }; // Secure password storage should use hashing

function authenticate(username, password) {
    if (username === adminUser.username && password === adminUser.password) {
        return true;
    } else {
        notify('Authentication failed.');
        return false;
    }
}

// XSS Protection
function escapeHtml(unsafe) {
    return unsafe.replace(/&/g, '&amp;')
                 .replace(/</g, '&lt;')
                 .replace(/>/g, '&gt;')
                 .replace(/"/g, '&quot;')
                 .replace(/'/g, '&#039;');
}

// Notifications
function notify(message) {
    console.log(message);  // Replace with UI alert or notification
}

// Local Storage Management
function saveToLocalStorage() {
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadFromLocalStorage() {
    const loadedProducts = localStorage.getItem('products');
    const loadedCart = localStorage.getItem('cart');
    if (loadedProducts) products = JSON.parse(loadedProducts);
    if (loadedCart) cart = JSON.parse(loadedCart);
}

// Error Handling
try {
    loadFromLocalStorage();
} catch (error) {
    console.error('Error loading from local storage:', error);
}