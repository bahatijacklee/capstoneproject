// Initialize the cart array to store items
//let cart = [];

// Function to add items to the cart
//function addToCart(imageUrl, productId, productName, productPrice) {
    // Create a new item object
 //   const item = {
   //     imageUrl: imageUrl,
    //    productId: productId,
     //   productName: productName,
    //    productPrice: productPrice,
 //   };

    // Add the item to the cart array
   // cart.push(item);

    // Update the cart count and total
//updateCartDisplay();
//}

// Function to update the cart count and total display on the page
function updateCartDisplay() {
    const cartCountElement = document.getElementById('cart-count');
    const totalPriceElement = document.getElementById('total-price');

    // Calculate the total price
    const total = cart.reduce((acc, item) => acc + item.productPrice, 0);

    // Update the cart count and total on the page
    cartCountElement.textContent = cart.length;
    totalPriceElement.textContent = `Total: Ksh ${total}`;
}

// Example: Rate product
function rateProduct(productId, rating) {
    // Implement your rating logic here
}

// Add event listeners for your buttons (e.g., "Add to Cart" buttons)
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-button');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const imageUrl = button.getAttribute('data-image-url');
            const productId = button.getAttribute('data-product-id');
            const productName = button.getAttribute('data-product-name');
            const productPrice = parseFloat(button.getAttribute('data-product-price'));
            
            addToCart(imageUrl, productId, productName, productPrice);
        });
    });
});
// java.js

// Define an array to store cart items
let cartItems = [];

// Function to add an item to the cart
function addToCart(imageUrl, productName, productPrice) {
    cartItems.push({ imageUrl, productName, productPrice });

    // Update the cart count
    const cartCount = document.getElementById("cart-count");
    cartCount.textContent = cartItems.length;

    // Update the cart view
    updateCartView();
}

// Function to update the cart view
function updateCartView() {
    const cartTable = document.getElementById("cart-table");
    const totalElement = document.getElementById("total-price");

    // Clear the current table
    cartTable.innerHTML = '';

    let total = 0;

    // Loop through cart items and add rows to the table
    cartItems.forEach((item, index) => {
        const row = cartTable.insertRow();
        row.innerHTML = `<td>${item.productName}</td><td>Ksh ${item.productPrice}</td>`;
        total += item.productPrice;
    });

    // Update the total
    totalElement.textContent = `Total: Ksh ${total}`;
}

// Initial cart view update
updateCartView();
