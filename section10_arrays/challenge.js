'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogsJuliaCorrect = dogsJulia.slice(1, 3);
const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];
const dogsJulia2Correct = dogsJulia2.slice(1, 3);

const checkDogs = function (array1, array2) {
  const combined = array1.concat(array2);
  combined.forEach(function (item, index) {
    item < 3
      ? console.log(`Dog number ${index + 1} is still a puppy.`)
      : console.log(`Dog number ${index + 1} is an adult.`);
  });
};
//checkDogs(dogsJuliaCorrect, dogsKate);
//console.log('------------ Second Dataset -------------');
//checkDogs(dogsJulia2Correct, dogsKate2);

// Final coding Challenge
///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.

Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little
is the opposite.

Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the 
recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it
to the object as a new property. Do NOT create a new array, simply loop over the array. 
Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have 
multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit 
tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all
owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too
much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended 
(just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition 
used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order 
(keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between 
them 😉

HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) 
&& current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion.
*/
//TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//GOOD LUCK 😀

// Objective 1: change the objects of the array
dogs.forEach(item => {
  item.recommendedFood = Number((item.weight ** 0.75 * 28).toFixed(2));
});

// Objective 2: find owner and log if they over feeding
const findOwner = function (owner) {
  const array = [];
  dogs.forEach(item => {
    if (item.owners.includes(owner)) array.push(item);
  });
  if (array[0].curFood < array[0].recommendedFood) {
    console.log(`${owner}'s dog is eating too little.`);
  } else {
    console.log(`${owner}'s dog is eating too much`);
  }
};

console.log(dogs);

findOwner('Alice');

// another way to do this
// do a find and then an includes

const dogSarah = dogs.find(item => item.owners.includes('Sarah'));

console.log(dogSarah);

// Objective 3 adn 4: Create an array of each owners feeding habits
// Print to console
const createFoodArrays = function (data) {
  const ownersEatTooMuch = [];
  const ownersEatTooLittle = [];
  data.forEach(item => {
    if (item.curFood < item.recommendedFood) {
      ownersEatTooLittle.push(item.owners);
    } else {
      ownersEatTooMuch.push(item.owners);
    }
  });
  const tooMuch = ownersEatTooMuch.flat();
  const tooLittle = ownersEatTooLittle.flat();
  console.log(`${tooMuch.join(', and ')}'s dogs eat too much`);
  console.log(`${tooLittle.join(', and ')}'s dogs eat too little`);
};

createFoodArrays(dogs);

// Another way to do this
// filter to get the ones you want then flat map to get your array.
const eatMuch = dogs
  .filter(item => item.curFood > item.recommendedFood)
  .flatMap(item => item.owners);

console.log(eatMuch);

// Object 5: Check if a Owner is feeding their dog right.

const testOne = () => dogs.some(item => item.curFood === item.recommendedFood);

console.log(testOne());

// Objective 6 and 7: Dogs eating ok amount

const checkOK = one =>
  one.curFood > one.recommendedFood * 0.9 &&
  one.curFood < one.recommendedFood * 1.1;

const anyDogOk = () => dogs.some(item => checkOK(item));

console.log(anyDogOk());

const okOwners = () => {
  const yesOwners = [];
  const noOwners = [];
  dogs.forEach(item => {
    if (checkOK(item)) {
      yesOwners.push(item.owners);
    } else {
      noOwners.push(item.owners);
    }
  });
  console.log(`${yesOwners.flat().join(', ')}'s dog is fed ok.`);
  console.log(`${noOwners.flat().join(', ')}'s dogs are not fed ok.`);
};

okOwners();

// Objective 8: Create a copy and sort by recommended food portion in ascending order

const dogsNew = dogs.slice();

//sorting the objects of an array.
// The array sort function works off of a function returning either 1 or -1
// so you can create your own sort function that returns either 1 or -1 depending
// on what item is to be sorted what way

const sortObj = (a, b) => {
  if (a.recommendedFood < b.recommendedFood) {
    return -1;
  } else if (a.recommendedFood > b.recommendedFood) {
    return 1;
  } else {
    return 0;
  }
};

dogsNew.sort(sortObj);

console.log(dogsNew);

// Another way to do this
// when sorting an array of objects the a and b become the objects

const dogsNew2 = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsNew2);
