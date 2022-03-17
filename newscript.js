const images = document.querySelectorAll('.big-stat');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('big-stat');
    } else {
      entry.target.classList.remove('big-stat');
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});