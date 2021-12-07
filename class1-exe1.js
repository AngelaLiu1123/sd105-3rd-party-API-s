// 1.JS single thread/render blocking in the browser
// function downloadImage(imgFileName) {
//   let count = 0;
//   while (count < 1000000000) {
//     count++;
//   }
//   console.log(`${imgFileName} Downloaded`);
// }

// function logEvent(logString) {
//   console.log(logString);
// }

// logEvent('event1');
// logEvent('event2');
// logEvent('event3');
// downloadImage('image1.jpg');
// logEvent('event4');
// logEvent('event5');
// logEvent('event6');

// 2.Browse setTimeOut Method fix the single thread issue
// function downloadImage(imgFileName) {
//   setTimeout(function () {
//     console.log(`${imgFileName} Downloaded`);
//   }, 3000);
// }

// function logEvent(logString) {
//   console.log(logString);
// }

// logEvent('event1');
// logEvent('event2');
// logEvent('event3');
// downloadImage('image1.jpg');
// logEvent('event4');
// logEvent('event5');
// logEvent('event6');


// 3.use callback method to fix the function order issue
function downloadImage(imgFileName, callback) {
  setTimeout(function () {
    console.log(`${imgFileName} Downloaded`);
    callback('event4');
    callback('event5');
    callback('event6');
  }, 3000);
}

function logEvent(logString) {
  console.log(logString);
}

logEvent('event1');
logEvent('event2');
logEvent('event3');
downloadImage('image1.jpg', logEvent);
// logEvent('event4');
// logEvent('event5');
// logEvent('event6');



const fastFunction = (logString) => {
  console.log(logString);
}

const slowFunction = (logString) => {
  setTimeout(function() {
      console.log(logString);
  }, 2000);
}

fastFunction('first line');
fastFunction('second line');

const third = slowFunction('third line')
console.log(third);