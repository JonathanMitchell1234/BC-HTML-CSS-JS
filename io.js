// const div = document.querySelector("news-panel")

// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("news-panel")
//     }
//   })
// }

// const options = {}

// const myObserver = new IntersectionObserver(callback, options)

// myObserver.observe(div)


const div = document.querySelectorAll('.news-panel');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('news-panel');
    } else {
      entry.target.classList.remove('news-panel');
    }
  });
});

div.forEach(div => {
  observer.observe(div);
});


// const container = document.querySelectorAll('.services-container');

// observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.intersectionRatio > 0) {
//       entry.target.classList.add('services-container');
//     } else {
//       entry.target.classList.remove('services-container');
//     }
//   });
// });

// container.forEach(container => {
//   observer.observe(container;
// });
