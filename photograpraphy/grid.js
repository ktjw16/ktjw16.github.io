window.addEventListener('load', function() {
    const rows = document.querySelectorAll('#photo-grid .row');
  
    rows.forEach(row => {
      let totalAspectRatio = 0;
      const images = row.querySelectorAll('img');
  
      // calculate the total aspect ratio of all images in the row
      images.forEach(img => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        totalAspectRatio += aspectRatio;
      });
  
      // set the width of each image based on its aspect ratio
      images.forEach(img => {
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        const percentageWidth = (aspectRatio / totalAspectRatio) * 100;
        img.style.width = `calc(${percentageWidth}% - 16px)`; // px value based on margins
      });
    });
  });
  