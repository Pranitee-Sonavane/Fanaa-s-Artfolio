document.addEventListener('DOMContentLoaded', () => {
  const dividerInnerImage = document.getElementById('divider-image-inner');

  if (!dividerInnerImage) {
    console.error("Divider image element not found for zoom effect.");
    return;
  }

  const zoomThreshold = 100; // Pixels from top to trigger zoom change

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    let scaleValue = 1.05; // Default scale (zoomed in)

    if (scrollY > zoomThreshold) {
      // Scrolled DOWN past threshold: Zoom OUT
      scaleValue = 1;
    }

    // Apply ONLY scale transform via JS, overwriting CSS initial scale
    dividerInnerImage.style.transform = `scale(${scaleValue})`;
  });

  // Initial check in case the page loads scrolled down
  window.dispatchEvent(new Event('scroll'));
});
