// const makeCake = function() {
//   setTimeout(() => {console.log('Step 1: Preheat oven to 175 degrees C.');}, 20);
//   setTimeout(() => {console.log('Step 2: Grease and flour a 9x9 inch pan.');}, 200);
//   setTimeout(() => {console.log('Step 3: In a medium bowl, cream together the sugar and butter.');}, 3000);
//   setTimeout(() => {console.log('Step 4: Beat in the eggs, one at a time.');}, 5000);
//   setTimeout(() => {console.log('Step 5: Stir in the vanilla.');}, 1000);
//   setTimeout(() => {console.log('Step 6: Combine flour and baking powder');}, 2000);
//   setTimeout(() => {console.log('Step 7: Add dry ingredients to the creamed mixture and mix well.');}, 300);
//   setTimeout(() => {console.log('Step 8: Stir in the milk until batter is smooth.');}, 4000);
//   setTimeout(() => {console.log('Step 9: Pour or spoon batter into the prepared pan.');}, 6000);
//   setTimeout(() => {console.log('Step 10: Bake for 30 to 40 minutes.');}, 3000);
//   setTimeout(() => {console.log('Step 11: Cake is done when it springs back to the touch.');}, 1);
// }

const makeCake = function () {
  setTimeout(() => {
    console.log('Step 1: Preheat oven to 175 degrees C.');
    setTimeout(() => {
      console.log('Step 2: Grease and flour a 9x9 inch pan.');
      setTimeout(() => {
        console.log('Step 3: In a medium bowl, cream together the sugar and butter.');
        setTimeout(() => {
          console.log('Step 4: Beat in the eggs, one at a time.');
          setTimeout(() => {
            console.log('Step 5: Stir in the vanilla.');
            setTimeout(() => {
              console.log('Step 6: Combine flour and baking powder');
              setTimeout(() => {
                console.log('Step 7: Add dry ingredients to the creamed mixture and mix well.');
                setTimeout(() => {
                  console.log('Step 8: Stir in the milk until batter is smooth.');
                  setTimeout(() => {
                    console.log('Step 9: Pour or spoon batter into the prepared pan.');
                    setTimeout(() => {
                      console.log('Step 10: Bake for 30 to 40 minutes.');
                      setTimeout(() => { console.log('Step 11: Cake is done when it springs back to the touch.'); }, 1);
                    }, 3000);
                  }, 6000);
                }, 4000);
              }, 300);
            }, 2000);
          }, 1000);
        }, 5000);
      }, 3000);
    }, 200);
  }, 20);
}

// makeCake();

// part 3
// setTimeout(function() {
//   let counter = 0;  
//   console.log(`odd:${counter++}`);
//   setTimeout(function() {
//     console.log(counter++);
//     setTimeout(function() {
//       console.log(`odd:${counter++}`);
//       setTimeout(function() {
//         console.log(counter++);
//         setTimeout(function() {
//           console.log(`odd:${counter++}`);
//           setTimeout(function() {
//             console.log(counter++);
//             setTimeout(function() {
//               console.log(`odd:${counter++}`);
//               setTimeout(function() {
//                 console.log(counter++);
//                 setTimeout(function() {
//                   console.log(`odd:${counter++}`);
//                   setTimeout(function() {
//                     console.log(counter++);
//                   }, 500);
//                 }, 500);
//               }, 500);
//             }, 500);
//           }, 500);
//         }, 500);
//       }, 500);
//     }, 500);
//   }, 500);
// }, 500);


// part 4
let counter = 0; 
setTimeout(step1, 500);

function step1() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step2, 500);
}

function step2() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step3, 500);
}

function step3() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step4, 500);
}

function step4() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step5, 500);
}

function step5() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step6, 500);
}

function step6() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step7, 500);
}

function step7() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step8, 500);
}

function step8() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step9, 500);
}

function step9() {
  // do some stuff here
  console.log(counter++);
  setTimeout(step10, 500);
}

function step10() {
  // do some stuff here
  console.log(counter++);
}