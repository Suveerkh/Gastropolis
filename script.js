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
        itemDiv.innerText = `${item.title} - Free`; // Update price to "Free"
        cartItemsDiv.appendChild(itemDiv);
    });
    totalPriceDisplay.innerText = `Total: Free`; // Update total display
}

// Example of adding a game to the cart
const buyButtons = document.querySelectorAll('.game-item button');
buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const game = {
            title: `Game Title ${index + 1}`,
            price: 0 // Set price to 0 since all games are free
        };
        addToCart(game);
    });
});

// Handle download buttons
const downloadButtons = document.querySelectorAll('.download-button');
downloadButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const file = event.target.getAttribute('data-file');
        // Trigger a download action
        alert(`Starting download for ${file}`);
        // In a real application, this would link to an actual file:
        // window.location.href = file; // Uncomment for actual download
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
