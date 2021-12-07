// part0
// new Promise((resolve, reject) => {
//   reject('promise has failed!');
// })
// .then(msg => console.log(msg))
// .catch(err => console.log(err));

// part1
// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject('promise has failed!');
//   }, 2000)
// })
// // .then(msg=> {console.log(msg)})
// .catch(msg=> {console.log(msg)});

// part 3 & 4
const addPromise = (val) => {
  return new Promise((resolve, reject) => {
    
    console.log(val)
    throw 'Angela made this error!'
    resolve(1);
    
  });
}
addPromise(0)
.then(msg =>  {console.log(msg); return 2;})
.catch(err => console.log(err))
.then(msg2 => {console.log(msg2); return 3;})
.then(msg3 => {console.log(msg3); return 4;})
.then((msg4) => {console.log(msg4)})
.catch(err => console.log(err));

// part 5
const myPromise = ['A', 'B', 'C', 'D', 'E', 'F'].map((val) => {
  return new Promise((resolve, reject) => {
    const time = Math.random() * 3000;
      setTimeout(() => {
        resolve(val);
      }, time);
  });
});

Promise.all(myPromise)
.then(data => console.log(data))
.catch(err => console.log(err));