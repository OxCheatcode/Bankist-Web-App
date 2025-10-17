/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//LOOP FOR OF

for (const movement of movements) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }
};

//FOR EACH
movements.forEach(function (movement) {
    if (movement > 0) {
        console.log(`You deposited ${movement}`);
    } else {
        console.log(`You withdrew ${Math.abs(movement)}`);
    }


})
const juliaDataOne = [3, 5, 2, 12, 7];
const juliaDataTwo = [9, 16, 6, 8, 3];
const kateDataOne = [4, 1, 15, 8, 3];
const kateDataTwo = [10, 5, 6, 1, 4];


const dogsJuliaD = juliaDataOne.concat(juliaDataTwo);
const dogsJuliaS = dogsJuliaD.slice(1, [-2]);
const dogsJulia = dogsJuliaS.slice(0)
const dogsKate = kateDataOne.concat(kateDataTwo);

const allDogs = dogsJulia.concat(dogsKate);
allDogs.forEach(function (age, i) {
    if (age < 3) {
        console.log(`Dog ${i + 1} is a puppy of ${age} years old`);
    } else {
        console.log(`Dog ${i + 1} is an adult dog of ${age} years old`)
    }
});

const eurToUsd = 1.2;
const usdMovement = movements.map(mov =>
    mov * eurToUsd
);
//console.log(movements);
//console.log(usdMovement);

const movementDesc = movements.map((movement, i) =>

    `${i + 1}: You ${movement > 0 ? 'deposited' : 'withdrew'
    }  ${Math.abs(movement)}`



);
//console.log(movementDesc);

const deposits = movements.filter(function (mov) {
    return mov > 0;
});

console.log(deposits);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

const balance = movements.reduce((acm, cur) => acm + cur, 0);
console.log(balance);


const calcAverageHumanAge = ages => ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4)).filter(age => age >= 18).reduce((acm, age, i, arr) => acm + age / arr.length, 0);


const mean1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const mean2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(mean1);
console.log(mean2);

//const array = Array.from({ length: 100 }, (_, i) => i + 1);
//console.log(array);





/* Julia and Kate are still studying dogs. This time they are want to figure out if the dogs in their are eating too much or too little food.

- Formula for calculating recommended food portion: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
- Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
- Eating an okay amount means the dog's current food portion is within a range 10% above and below the recommended portion (see hint).

YOUR TASKS:
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion (recFood) and add it to the object as a new property. Do NOT create a new array, simply loop over the array (We never did this before, so think about how you can do this without creating a new array).
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple users, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much (ownersTooMuch) and an array with all owners of dogs who eat too little (ownersTooLittle).
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is ANY dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether ALL of the dogs are eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Group the dogs into the following 3 groups: 'exact', 'too-much' and 'too-little', based on whether they are eating too much, too little or the exact amount of food, based on the recommended food portion.
9. Group the dogs by the number of owners they have
10. Sort the dogs array by recommended food portion in an ascending order. Make sure to NOT mutate the original array!

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
  { weight: 18, curFood: 244, owners: ['Joe'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

GOOD LUCK 😀 */

const dogs = [
    { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
    { weight: 8, curFood: 200, owners: ['Matilda'] },
    { weight: 13, curFood: 275, owners: ['Sarah', 'John', 'Leo'] },
    { weight: 18, curFood: 244, owners: ['Joe'] },
    { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(dog => (dog.recFood = Math.floor(dog.weight ** 0.75 * 28)));
console.log(dogs);

//2.
const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(`Sarah's dog eats too ${sarahDog.curFood < sarahDog.recFood ? 'little' : 'much'
    }`
);

//3.
const ownersTooMuch = dogs.filter(dog => dog.curFood > dog.recFood).flatMap(dog => dog.owners);
const ownersTooLittle = dogs.filter(dog => dog.curFood < dog.recFood).flatMap(dog => dog.owners);

console.log(ownersTooLittle);
console.log(ownersTooMuch);

//4.
console.log(`${ownersTooLittle.join(' and ')}'s eats too little`);
console.log(`${ownersTooMuch.join(' and ')}'s eats too much`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6.
const checkDogEatOkay = dog => dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;
console.log(dogs.every(checkDogEatOkay));

//7.
const dogEatOkay = dogs.filter(checkDogEatOkay);
console.log(dogEatOkay);

//8.
const dogPortion = Object.groupBy(dogs, dog => {
    if (dog.recFood > dog.curFood) {
        return `too little`;
    } else if (dog.curFood > dog.recFood) {
        return `too much`;
    } else {
        return `OKAY!`;
    }
});
console.log(dogPortion);

//9.
const dogOwners = Object.groupBy(dogs, dog => `${dog.owners.length} - owner(s)`);
console.log(dogOwners);

//10.
const dogSorted = dogs.toSorted((a, b) => a.recFood - b.recFood);
console.log(dogSorted);
