// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// project 1
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const temperatures2 = [5, -7, -4, -2, 'error', 5, 10, 18, 19, 'error', 11, 8];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const mergeArray = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    array2.push(array1[i]);
  }
  console.log(array2);
  return calcTempAmplitude(array2);
};

console.log(mergeArray(temperatures, temperatures2));

// could have also used:
// const array3 = array1.concat(array2);
*/
