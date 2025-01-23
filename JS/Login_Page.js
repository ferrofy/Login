const validUsernames = ['VPX', 'TANAV', 'AKX', 'KMX', 'SSX', 'ANGEL', 'UCI', 'PPX'];

function validateUser() {
    const usernameInput = document.getElementById('username').value.toUpperCase();
    if (validUsernames.includes(usernameInput) || usernameInput === 'GUEST') {
        window.location.href = `https://ferrofy.github.io/Login/User/${usernameInput}`;
    } else {
        document.getElementById('error-message').textContent = 'User Name Not Found. If You Are Guest Then Type User Name as - Guest';
    }
}

const songs = [
    'Songs/Play_Date.mp3',
    'Songs/All_The_Stars.mp3'
];

let currentSongIndex = 0;
let audio = new Audio(songs[currentSongIndex]);

audio.onerror = function() {
    showPopup('#errorPopup');
};

function playPauseMusic() {
    if (audio.paused) {
        audio.play();
        document.getElementById('playPauseBtn').textContent = '⏸️ Stop';
        showSongPopup();
    } else {
        audio.pause();
        document.getElementById('playPauseBtn').textContent = '▶️ Play';
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    document.getElementById('playPauseBtn').textContent = '⏸️ Stop';
    showSongPopup();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    audio.src = songs[currentSongIndex];
    audio.play();
    document.getElementById('playPauseBtn').textContent = '⏸️ Stop';
    showSongPopup();
}

function increaseVolume() {
    if (audio.volume < 1) {
        audio.volume += 0.1;
    }
}

function decreaseVolume() {
    if (audio.volume > 0) {
        audio.volume -= 0.1;
    }
}

function showPopup(popupId) {
    document.querySelector(popupId).classList.remove('hidden');
}

function closePopup() {
    document.querySelector('#errorPopup').classList.add('hidden');
    document.querySelector('#songPopup').classList.add('hidden');
}

function showSongPopup() {
    const songName = songs[currentSongIndex].split('/').pop().replace('.mp3', '');
    document.getElementById('songName').textContent = `Playing ${songName}`;
    document.getElementById('songPopup').classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('songPopup').classList.add('hidden');
    }, 3000); // Hide popup after 3 seconds
}

document.getElementById('playPauseBtn').addEventListener('click', playPauseMusic);
document.getElementById('nextBtn').addEventListener('click', nextSong);
document.getElementById('prevBtn').addEventListener('click', prevSong);
document.getElementById('volumeUpBtn').addEventListener('click', increaseVolume);
document.getElementById('volumeDownBtn').addEventListener('click', decreaseVolume);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        playPauseMusic();
    } else if (event.code === 'KeyN') {
        nextSong();
    } else if (event.code === 'KeyP') {
        prevSong();
    }
});
