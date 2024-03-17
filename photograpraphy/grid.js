window.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#photo-grid .row');
  
    rows.forEach(row => {
        const images = row.querySelectorAll('img');
        images.forEach(img => {
            // initially hide images
            img.classList.add('hidden');
            if (img.complete && img.naturalHeight !== 0) {
                resizeImage(img);
                // show image if already loaded
                img.classList.remove('hidden');
            } else {
                img.addEventListener('load', () => {
                    resizeImage(img);
                    // show image after it has loaded
                    img.classList.remove('hidden');
                });
            }
        });
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