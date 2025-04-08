// ...existing code...

const songs = [
    { title: "Song 1", artist: "Artist 1", album: "Album 1", year: 2021 },
    { title: "Song 2", artist: "Artist 2", album: "Album 2", year: 2020 },
    // Add more songs as needed
];

const songList = document.getElementById("song-list");
const songModal = document.getElementById("song-modal");
const songDetails = document.getElementById("song-details");
const closeModal = document.getElementById("close-modal");

// Populate song list
songs.forEach((song, index) => {
    const songItem = document.createElement("div");
    songItem.textContent = song.title;
    songItem.classList.add("song-item");
    songItem.addEventListener("click", () => showSongDetails(index));
    songList.appendChild(songItem);
});

// Show song details in modal
function showSongDetails(index) {
    const song = songs[index];
    songDetails.innerHTML = `
        <h2>${song.title}</h2>
        <p><strong>Artist:</strong> ${song.artist}</p>
        <p><strong>Album:</strong> ${song.album}</p>
        <p><strong>Year:</strong> ${song.year}</p>
    `;
    songModal.classList.remove("hidden");
}

// Close modal
closeModal.addEventListener("click", () => {
    songModal.classList.add("hidden");
});

// Close modal when clicking outside content
window.addEventListener("click", (event) => {
    if (event.target === songModal) {
        songModal.classList.add("hidden");
    }
});
