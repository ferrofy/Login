const validUsernames = ['VPX', 'TANAV', 'AKX', 'KMX', 'SSX', 'ANGEL', 'UCI', 'PPX'];

function validateUser() {
    const usernameInput = document.getElementById('username').value.toUpperCase();
    if (validUsernames.includes(usernameInput) || usernameInput === 'GUEST') {
        window.location.href = `https://ferrofy.github.io/User_Data/${encodeURIComponent(usernameInput)}`;
    } else {
        document.getElementById('error-message').textContent = 'Guest, This User Name Is Incorrect. If You Are Guest Then Type User Name "Guest"';
    }
}
