// part1 & part 2
function getRandom(max, min) {
  return Math.random()*(max-min+1) + min;
}
const randomNum = getRandom(20, 1);
// console.log(randomNum);

function getRandomNum(randomNum) {
  return new Promise((resolve, reject) => {
    if (randomNum > 10) {
      resolve(`successfully! The randomNumber is ${randomNum}`);
    } else {
      reject(`failed! The randomNumber is ${randomNum}`);
    }
  });
}

getRandomNum(randomNum)
.then((data) => {console.log(data)})
.catch((error) => {console.log(error)});

// part3 Re-write the code from the Class 2 "Break it up" 
// exercise using your previous code, but this time, use a promise.



