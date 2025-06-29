// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark');
}

// Video Popup
function playVideo(title) {
    document.getElementById('popup').style.display = 'flex';
    document.getElementById('videoTitle').innerText = title;
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

// Search Function
function searchVideos() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const videos = document.getElementById('videoGrid').getElementsByClassName('video-card');

    Array.from(videos).forEach(video => {
        const title = video.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            video.style.display = "";
        } else {
            video.style.display = "none";
        }
    });
}
