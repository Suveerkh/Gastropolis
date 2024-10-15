const cart = [];
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceDisplay = document.getElementById('total-price');

function addToCart(game) {
    cart.push(game);
    updateCart();
}

function updateCart() {
    cartItemsDiv.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerText = `${item.title} - $${item.price}`;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });
    totalPriceDisplay.innerText = `Total: $${total.toFixed(2)}`;
}

// Example of adding a game to the cart
const buyButtons = document.querySelectorAll('.game-item button');
buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const game = {
            title: `Game Title ${index + 1}`,
            price: index === 0 ? 29.99 : 39.99 // Example prices
        };
        addToCart(game);
    });
});

document.getElementById('checkout').addEventListener('click', () => {
    alert('Proceeding to checkout...');
    // Implement checkout logic here
});

document.getElementById('register').addEventListener('click', () => {
    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;
    localStorage.setItem(username, password); // Store user info in local storage
    document.getElementById('auth-message').innerText = 'User registered!';
});

document.getElementById('login').addEventListener('click', () => {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const storedPassword = localStorage.getItem(username);
    if (storedPassword === password) {
        document.getElementById('auth-message').innerText = 'Login successful!';
        // Redirect to a user dashboard or library page here
    } else {
        document.getElementById('auth-message').innerText = 'Invalid username or password.';
    }
});
