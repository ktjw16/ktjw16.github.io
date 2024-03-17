window.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#photo-grid .row');
  
    rows.forEach(row => {
        let imagesLoaded = 0; // counter for loaded images
        const images = row.querySelectorAll('img');
        
        // initially hide entire row
        row.classList.add('hidden');
        
        images.forEach(img => {
            if (img.complete && img.naturalHeight !== 0) {
                imagesLoaded++;
                resizeImage(img);
            } else {
                img.addEventListener('load', () => {
                    resizeImage(img);
                    imagesLoaded++;
                    // Check if all images in the row are loaded
                    if (imagesLoaded === images.length) {
                        // Show row if all images are loaded
                        row.classList.remove('hidden');
                    }
                });
            }
        });
        
        // show row if all images are loaded
        if (imagesLoaded === images.length) {
            row.classList.remove('hidden');
        }
    });

    function resizeImage(img) {
        const row = img.closest('.row');
        let totalAspectRatio = 0;
        const images = row.querySelectorAll('img');
    
        // calculate total aspect ratio of all images in the row
        images.forEach(image => {
            if (image.complete && image.naturalHeight !== 0) {
                const aspectRatio = image.naturalWidth / image.naturalHeight;
                totalAspectRatio += aspectRatio;
            }
        });
    
        // set width of each image based on its aspect ratio
        images.forEach(image => {
            if (image.complete && image.naturalHeight !== 0) {
                const aspectRatio = image.naturalWidth / image.naturalHeight;
                const percentageWidth = (aspectRatio / totalAspectRatio) * 100;
                image.style.width = `calc(${percentageWidth}% - 16px)`; // adjust based on margins
            }
        });
    }
});