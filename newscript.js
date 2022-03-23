// Intersection Observer for large stat
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

// Intersection Observer for Donate Now link
const link = document.querySelectorAll('.donate-now-link');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('donate-now-link');
    } else {
      entry.target.classList.remove('donate-now-link');
    }
  });
});

link.forEach(link => {
  observer.observe(link);
});




function animateValue(id, start, end, duration) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}

animateValue("value", 0, 207, 5000);




function animateValue(id, start, end, duration) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}

animateValue("value2", 0, 12, 5000);


function animateValue(id, start, end, duration) {
  // assumes integer values for start and end
  
  var obj = document.getElementById(id);
  var range = end - start;
  // no timer shorter than 50ms (not really visible any way)
  var minTimer = 50;
  // calc step time to show all interediate values
  var stepTime = Math.abs(Math.floor(duration / range));
  
  // never go below minTimer
  stepTime = Math.max(stepTime, minTimer);
  
  // get current time and calculate desired end time
  var startTime = new Date().getTime();
  var endTime = startTime + duration;
  var timer;

  function run() {
      var now = new Date().getTime();
      var remaining = Math.max((endTime - now) / duration, 0);
      var value = Math.round(end - (remaining * range));
      obj.innerHTML = value;
      if (value == end) {
          clearInterval(timer);
      }
  }
  
  timer = setInterval(run, stepTime);
  run();
}

animateValue("value3", 0, 31, 5000);

