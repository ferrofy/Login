const validUsernames = ['VPX', 'TANAV', 'AKX', 'KMX', 'SSX', 'ANGEL', 'UCI', 'PPX'];

function validateUser() {
    const usernameInput = document.getElementById('username').value.toUpperCase();
    if (validUsernames.includes(usernameInput) || usernameInput === 'GUEST') {
        window.location.href = `https://ferrofy.github.io/User/${encodeURIComponent(usernameInput)}/Profile`;
    } else {
        document.getElementById('error-message').textContent = 'This User Name Is Not Valid. If You Are New Then Type User Name "Guest"';
    }
}
