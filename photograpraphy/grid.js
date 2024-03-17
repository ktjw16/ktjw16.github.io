window.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#photo-grid .row');
  
    rows.forEach(row => {
        const images = row.querySelectorAll('img');
        images.forEach(img => {
            if (img.complete) {
                resizeImage(img);
            } else {
                img.addEventListener('load', () => {
                    resizeImage(img);
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
            if (image.complete) {
                const aspectRatio = image.naturalWidth / image.naturalHeight;
                totalAspectRatio += aspectRatio;
            }
        });
    
        // set width of each image based on its aspect ratio
        images.forEach(image => {
            if (image.complete) {
                const aspectRatio = image.naturalWidth / image.naturalHeight;
                const percentageWidth = (aspectRatio / totalAspectRatio) * 100;
                image.style.width = `calc(${percentageWidth}% - 16px)`; // adjust based on margins
                image.style.backgroundColor = "transparent";
            }
        });
    }
});