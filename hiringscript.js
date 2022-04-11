const quote = document.querySelectorAll('.youtubevideo');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('youtubevideo');
    } else {
      entry.target.classList.remove('youtubevideo');
    }
  });
});

quote.forEach(quote => {
  observer.observe(quote);
});

const info = document.querySelectorAll('.maininformation');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('maininformation');
    } else {
      entry.target.classList.remove('maininformation');
    }
  });
});

info.forEach(info => {
  observer.observe(info);
});


