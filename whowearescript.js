const quote = document.querySelectorAll('.bigquote');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('bigquote');
    } else {
      entry.target.classList.remove('bigquote');
    }
  });
});

quote.forEach(quote => {
  observer.observe(quote);
});