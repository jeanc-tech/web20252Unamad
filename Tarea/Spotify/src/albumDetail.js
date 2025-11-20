// Album Detail Modal functionality

document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('albumModal');
    const modalOverlay = document.querySelector('.modal-overlay');
    const closeBtn = document.querySelector('.modal-close');
    const songCards = document.querySelectorAll('.song-card');

    // Open modal when clicking on a song card
    songCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Don't open modal if clicking on play button
            if (e.target.closest('.play-icon')) {
                return;
            }

            const albumId = this.getAttribute('data-album-id');
            if (albumId && albumsData[albumId]) {
                openAlbumModal(albumId);
            }
        });
    });

    // Close modal when clicking close button
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking overlay
    if (modalOverlay) {
        modalOverlay.addEventListener('click', function (e) {
            if (e.target === modalOverlay) {
                closeModal();
            }
        });
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    function openAlbumModal(albumId) {
        const album = albumsData[albumId];
        if (!album) return;

        // Update modal content
        document.getElementById('modalAlbumCover').src = album.cover;
        document.getElementById('modalAlbumTitle').textContent = album.title;
        document.getElementById('modalAlbumArtist').textContent = album.artist;

        // Create song list
        const songList = document.getElementById('modalSongList');
        songList.innerHTML = '';

        album.songs.forEach((song, index) => {
            const songItem = document.createElement('div');
            songItem.className = 'song-item';
            songItem.innerHTML = `
                <div class="song-number">${index + 1}</div>
                <div class="song-info">
                    <div class="song-title">${song.title}</div>
                    <div class="song-artist">${album.artist}</div>
                </div>
                <div class="song-duration">${song.duration}</div>
                <div class="song-play-btn">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8 5v14l11-7z"/>
                    </svg>
                </div>
            `;

            // Add click event to play song
            songItem.addEventListener('click', function () {
                playSong(album, song);
            });

            songList.appendChild(songItem);
        });

        // Show modal
        modal.classList.add('active');
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function playSong(album, song) {
        console.log(`Playing: ${song.title} by ${album.artist}`);
        // Aquí puedes agregar la lógica para reproducir la canción
        // Por ejemplo, actualizar un reproductor de audio
    }
});
