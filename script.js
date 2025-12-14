document.addEventListener('DOMContentLoaded', function() {
    const photoGrid = document.getElementById('photoGrid');
    const loadingElement = document.getElementById('loading');
    let currentlyPlayingVideo = null;
    
    // Function to check if file is a video
    function isVideo(url) {
        const videoExtensions = ['.mp4', '.mov', '.avi', '.webm', '.mkv', '.m4v'];
        return videoExtensions.some(ext => url.toLowerCase().endsWith(ext));
    }
    
    // Function to create modal
    function createModal() {
        const modal = document.createElement('div');
        modal.className = 'media-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-media-container"></div>
            </div>
        `;
        document.body.appendChild(modal);
        
        // Close modal on click outside or close button
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('modal-close')) {
                closeModal();
            }
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
        
        return modal;
    }
    
    // Function to open modal with media
    function openModal(mediaUrl, isVideoFile) {
        let modal = document.querySelector('.media-modal');
        if (!modal) {
            modal = createModal();
        }
        
        const container = modal.querySelector('.modal-media-container');
        container.innerHTML = '';
        
        if (isVideoFile) {
            const video = document.createElement('video');
            video.src = mediaUrl;
            video.controls = true;
            video.autoplay = true;
            video.className = 'modal-video';
            container.appendChild(video);
            
            // Pause any currently playing video in the grid
            if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
                currentlyPlayingVideo.pause();
            }
            currentlyPlayingVideo = video;
        } else {
            const img = document.createElement('img');
            img.src = mediaUrl;
            img.alt = 'Christmas memory';
            img.className = 'modal-image';
            container.appendChild(img);
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close modal
    function closeModal() {
        const modal = document.querySelector('.media-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            
            // Stop any playing video in modal
            const video = modal.querySelector('video');
            if (video) {
                video.pause();
            }
        }
    }
    
    // Function to create a photo or video element
    function createMediaElement(mediaUrl) {
        const mediaItem = document.createElement('div');
        mediaItem.className = 'photo-item';
        const isVideoFile = isVideo(mediaUrl);
        
        if (isVideoFile) {
            // Create video element
            mediaItem.classList.add('video-item');
            
            const video = document.createElement('video');
            video.src = mediaUrl;
            video.controls = true;
            video.preload = 'metadata';
            video.loading = 'lazy';
            video.onerror = function() {
                console.error('Error loading video:', mediaUrl);
                mediaItem.classList.add('error');
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'Video failed to load';
                mediaItem.appendChild(errorMsg);
            };
            
            // Pause other videos when this one plays
            video.addEventListener('play', function() {
                if (currentlyPlayingVideo && currentlyPlayingVideo !== video) {
                    currentlyPlayingVideo.pause();
                }
                currentlyPlayingVideo = video;
            });
            
            // Hide play icon when playing and cursor away
            video.addEventListener('play', function() {
                const playIcon = mediaItem.querySelector('.play-icon');
                if (playIcon) {
                    playIcon.style.opacity = '0';
                }
            });
            
            video.addEventListener('pause', function() {
                const playIcon = mediaItem.querySelector('.play-icon');
                if (playIcon) {
                    playIcon.style.opacity = '1';
                }
            });
            
            // Add play icon overlay
            const playIcon = document.createElement('div');
            playIcon.className = 'play-icon';
            playIcon.innerHTML = '▶';
            mediaItem.appendChild(playIcon);
            
            mediaItem.appendChild(video);
            
            // Click to open modal
            mediaItem.addEventListener('click', function(e) {
                // Don't open modal if clicking on video controls
                if (!e.target.closest('video')) {
                    openModal(mediaUrl, true);
                }
            });
        } else {
            // Create image element
            const img = document.createElement('img');
            img.src = mediaUrl;
            img.alt = 'Christmas memory';
            img.loading = 'lazy';
            img.onerror = function() {
                console.error('Error loading image:', mediaUrl);
                mediaItem.classList.add('error');
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error-message';
                errorMsg.textContent = 'Image failed to load';
                mediaItem.appendChild(errorMsg);
            };
            
            mediaItem.appendChild(img);
            
            // Click to open modal
            mediaItem.addEventListener('click', function() {
                openModal(mediaUrl, false);
            });
        }
        
        return mediaItem;
    }
    
    // Function to load photos from Google Photos shared album
    async function loadGooglePhotos() {
        try {
            loadingElement.textContent = 'Loading photos from Google Photos...';
            
            // Note: Google Photos API requires authentication. For a simple solution, you can:
            // 1. Get shareable links from Google Photos
            // 2. Update the photoUrls array below with those links
            
            // Photo and Video URLs - you have two options:
            // OPTION 1: Download photos/videos from Google Photos and place them in a 'photos' folder
            // Then list them here like: 'photos/photo1.jpg', 'photos/video1.mp4', etc.
            // OPTION 2: Get direct URLs from Google Photos (right-click each photo/video → Copy image address)
            // Supported formats: Images (.jpg, .png, .gif, .webp) and Videos (.mp4, .mov, .webm, .m4v)
            
            const photoUrls = [
                'photos/IMG_20251213_094942.jpg',
                'photos/IMG_20251213_094945.jpg',
                'photos/IMG_20251213_094947.jpg',
                'photos/IMG_20251213_094949.jpg',
                'photos/IMG_20251213_094951.jpg',
                'photos/PXL_20251127_153411703.PORTRAIT.jpg',
                // Videos removed - Git LFS doesn't work with GitHub Pages
                // 'photos/PXL_20251128_005641749.LS.mp4',
                // 'photos/PXL_20251129_225427771.mp4',
                // 'photos/PXL_20251207_231759832.LS~2.mp4',
                'photos/PXL_20251206_192141816.PORTRAIT.jpg',
                'photos/PXL_20251207_181113133.PORTRAIT.jpg',
                'photos/PXL_20251209_155311094.jpg',
                'photos/PXL_20251209_165106951.PORTRAIT.jpg',
                'photos/PXL_20251209_193901359.PORTRAIT.jpg',
                'photos/PXL_20251210_125224232.PORTRAIT.jpg',
                'photos/PXL_20251210_125329322.PORTRAIT.jpg'
            ];
            
            if (photoUrls.length === 0) {
                showInstructions();
                return;
            }
            
            // Clear loading message
            loadingElement.style.display = 'none';
            
            // Add photos and videos to the grid with animation
            photoGrid.innerHTML = '';
            photoUrls.forEach((url, index) => {
                const mediaItem = createMediaElement(url);
                mediaItem.style.opacity = '0';
                mediaItem.style.transform = 'translateY(20px)';
                mediaItem.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
                photoGrid.appendChild(mediaItem);
                
                // Trigger reflow to enable the animation
                setTimeout(() => {
                    mediaItem.style.opacity = '1';
                    mediaItem.style.transform = 'translateY(0)';
                }, 100);
            });
            
            // Initialize lightgallery for the photo grid
            initLightGallery();
            
        } catch (error) {
            console.error('Error loading photos:', error);
            loadingElement.innerHTML = `
                <p>Error loading photos. Please check the console for details.</p>
                <p>${error.message}</p>
            `;
        }
    }
    
    // Function to show instructions for adding photos
    function showInstructions() {
        loadingElement.innerHTML = `
            <div class="instructions">
                <h3>How to Add Your Photos</h3>
                <p style="margin-bottom: 2rem; font-size: 1.1rem;">Choose one of these methods:</p>
                
                <div class="instruction-steps">
                    <h4 style="color: var(--secondary); margin-bottom: 1rem;">📁 Method 1: Download & Host Locally (Recommended for GitHub Pages)</h4>
                    <div class="step">
                        <div class="step-number">1</div>
                        <p>Open your <a href="https://photos.google.com/share/AF1QipNCxT50Rc6-N45qhQdEZscFPYCyKOU_bag-aRRNVNWnr-lc6X3p9f8a6gnng8-M6w?key=VXVrMDA0NEl4azNnMGlmSXVqVFR4c0o4R3hRb293" target="_blank">Google Photos album</a></p>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <p>Click the three dots (⋮) → Download all to save photos to your computer</p>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <p>Create a <code>photos</code> folder in your project directory and place the images there</p>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <p>Edit <code>script.js</code> and add photo paths like: <code>'photos/photo1.jpg'</code>, <code>'photos/photo2.jpg'</code></p>
                    </div>
                </div>
                
                <div class="instruction-steps" style="margin-top: 2rem;">
                    <h4 style="color: var(--secondary); margin-bottom: 1rem;">🔗 Method 2: Use Direct Image URLs</h4>
                    <div class="step">
                        <div class="step-number">1</div>
                        <p>Open your <a href="https://photos.google.com/share/AF1QipNCxT50Rc6-N45qhQdEZscFPYCyKOU_bag-aRRNVNWnr-lc6X3p9f8a6gnng8-M6w?key=VXVrMDA0NEl4azNnMGlmSXVqVFR4c0o4R3hRb293" target="_blank">Google Photos album</a></p>
                    </div>
                    <div class="step">
                        <div class="step-number">2</div>
                        <p>For each photo, right-click and select <strong>Copy image address</strong></p>
                    </div>
                    <div class="step">
                        <div class="step-number">3</div>
                        <p>Edit <code>script.js</code> and paste the URLs into the <code>photoUrls</code> array</p>
                    </div>
                    <div class="step">
                        <div class="step-number">4</div>
                        <p>Save and refresh this page</p>
                    </div>
                </div>
                
                <div class="help-links">
                    <p><strong>Note:</strong> Method 1 is recommended because it ensures photos will always load, even if Google Photos links change.</p>
                </div>
            </div>
        `;
    }
    
    // Initialize lightgallery for image viewing
    function initLightGallery() {
        // This requires lightgallery library to be loaded
        if (window.lightGallery) {
            lightGallery(photoGrid, {
                selector: '.photo-item',
                download: false,
                counter: false,
                plugins: [lgZoom, lgThumbnail],
                speed: 500
            });
        }
    }
    
    // Load photos when the page loads
    loadGooglePhotos();
    
    // Add responsive behavior
    window.addEventListener('resize', function() {
        // You can add responsive adjustments here if needed
    });
});
