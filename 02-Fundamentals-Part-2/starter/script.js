'use strict'
///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolphins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// 1. 平均分是其他队的两倍
// 2. 创建一个 calcAverage arrow 函数计算平均分
// 3. 创建一个 checkWinner 函数，接收两个参数 avgDolphins / avgKoalas，在控制台打印winner、victory points， "Koalas win (30 vs. 13)"
// 4. 这次没有平局

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3
// const avgDolphins = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(65, 54, 49)
// function checkWinner(avgDolphins, avgKoalas) {
//   // 这里写了一个少写了等号
//   if (avgDolphins >= avgKoalas * 2) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolphins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log('No Winners!')
//   }
// }

// checkWinner(avgDolphins, avgKoalas)

// const avgDolphins1 = calcAverage(85, 54, 41)
// const avgKoalas1 = calcAverage(23, 34, 27)
// checkWinner(avgDolphins1, avgKoalas1)


/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
// console.log(calcTip(100));

// const bills = [125, 555, 44]
// const tips = []
// tips.push(calcTip(bills[0]))
// tips.push(calcTip(bills[1]))
// tips.push(calcTip(bills[2]))
// console.log(tips);
// const total = bills.map(bill => bill + calcTip(bill))
// console.log(total)


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: true,

  getSummary: function () {
    return `Jonas is a ${this.age} - year old teacher, and he has ${this.hasDriversLicense ? "a" : 'no'} driver's license`
  }
};

// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);

// Jonas is a 46 - year old teacher, and he has a driver's license

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  heigh: 1.69,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  calcBMI: function () {
    return this.mass / (this.heigh * this.heigh)
  }
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  heigh: 1.95,
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  },
  calcBMI: function () {
    return this.mass / (this.heigh * this.heigh)
  }
}
let higherBMI
let higherFullName
let lowerBMI
let lowerFullName
if (mark.calcBMI() > john.calcBMI()) {
  higherBMI = mark.calcBMI()
  higherFullName = mark.getFullName()
  lowerBMI = john.calcBMI()
  lowerFullName = john.getFullName()
} else {
  higherBMI = john.calcBMI()
  higherFullName = john.getFullName()
  lowerBMI = mark.calcBMI()
  lowerFullName = mark.getFullName()
}
const result = `${higherFullName}'s BMI (${higherBMI}) is higher than ${lowerFullName}'s (${lowerBMI})!`
console.log('result', result);


///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2
const tips = [], totals = []
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i])
  tips.push(tip)
  totals.push(bills[i] + tip);
}

console.log(`Here is the tips: ${tips}`);
console.log(`Here is the totals: ${totals}`);

function calcAverage(arr) {
  let sum = 0
  const length = arr.length
  for (let i = 0; i < length; i++) {
    sum += arr[i];
  }
  return sum / length
}

console.log(`The average is ${calcAverage(totals)}`);

