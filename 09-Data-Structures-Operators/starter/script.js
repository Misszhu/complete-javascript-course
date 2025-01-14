'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 遍历 scored，打印值Goal 1: Lewandowski ✅
// 计算 odds 的平均值，打印到控制台 ✅
// 打印 odds Odd of victory Bayern Munich: 1.33 ✅
// 创建一个 scorers 对象，包含 players的名称，得分那个人作为属性，goals作为值
// {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2
// }
// 1
for(const [index, value] of game.scored.entries()) {
  // 我忘记+1了
  // console.log(`Goal ${index}: ${value}`)
  console.log(`Goal ${index + 1}: ${value}`)
}
let sum = 0
const odds = Object.values(game.odds)
for (const odd of odds) {
  sum += odd
}
// 我这里手动写了3，实际上用数组长度就可以饿了
// console.log(`The average odd is: ${sum/3}`);
console.log(`The average odd is: ${sum/odds.length}`);
// 3
for (const [key, value] of Object.entries(game.odds)) {
  if (key === 'x') {
    console.log(`Odd of draw: ${value}`)
  } else {
    console.log(`Odd of victory ${game[key]}: ${value}`)
  }
}
// 2
// BONUS
const scorers = {}
for (const player of game.scored) {
  // scorers[scorers] = 1
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}
console.log(scorers)


/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/


const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1. 新增一个 events 数组，元素不重复
// 2. 移除 64 分钟的黄牌
// 3.打印 An event happened, on average, every 9 minutes(获取map的size）
// 4.遍历 events 数组，打印 event数组：[FIRST HALF] 17: ⚽️ GOAL

const events = [...(new Set([...gameEvents.values()]))]
gameEvents.delete(64)
console.log(`An event happened, on average, every ${gameEvents.size} minutes`)

for (const [key, value] of gameEvents) {
  console.log(`[${key > 45 ? 'FIRST' : 'LAST'} HALF] ${key}: ${value}`);
}
