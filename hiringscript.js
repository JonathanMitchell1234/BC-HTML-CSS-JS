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

const header = document.querySelectorAll('.fa-money-bill');


observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fa-money-bill');
    } else {
      entry.target.classList.remove('fa-money-bill');
    }
  });
});

header.forEach(header => {
  observer.observe(header);
});




const line = document.querySelectorAll('.fa-chart-line');


observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fa-chart-line');
    } else {
      entry.target.classList.remove('fa-chart-line');
    }
  });
});

line.forEach(line => {
  observer.observe(line);
});


const hosp = document.querySelectorAll('.fa-hospital');


observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('fa-hospital');
    } else {
      entry.target.classList.remove('fa-hospital');
    }
  });
});

hosp.forEach(hosp => {
  observer.observe(hosp);
});

