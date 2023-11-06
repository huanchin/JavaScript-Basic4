"use strict";

// /*** object literals  ***/
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

/****** Set Object ******/
// Set Object可讓你儲存任何類型的唯一值（unique），不論是基本型別（primitive）值或物件參考（references）。
// Set Object是數值的收集器。您可以按插入順序迭代收集器中的元素。在 Set 裡的元素只會出現一次**；** 意即在Set裡的元素都是獨一無二
// new Set([iterable]);
const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);
// Set(3) [ "Pasta", "Pizza", "Risotto" ]
// size: 3
// <entries>
// 0: "Pasta"
// 1: "Pizza"
// 2: "Risotto"

// elements are unique
// order of element in the set is irrelevant

// string is also oterable
console.log(new Set("Jonas"));
// Set(5) [ "J", "o", "n", "a", "s" ]

console.log(ordersSet.size); // 3
console.log(ordersSet.has("Pizza")); // true
console.log(ordersSet.has("Bread")); // false
ordersSet.add("Garlic Bread");
console.log(ordersSet);
ordersSet.delete("Risotto");
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// turn set into array
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

/******* Map ********/
//Map 是保存了鍵值對（key-value pairs）的物件。任何值（包括物件及基本型別（primitive）值）都可以作為鍵或值。
// 一個 Map 物件會根據元素的新增順序走訪自身的所有元素 — for...of迴圈會在每次迭代回傳一個 [key, value] 陣列。
// Object 及 Map 的比較:
// Object (en-US) 和 Map 類似。兩者都允許你設置對應的鍵值對，檢索這些值，刪除鍵，並檢測是否有什麼存儲在鍵中。正因為如此（也因為沒有內置的替代品），Object 在歷史上一直被當作 Map 使用；然而在某些情況下，使用 Map 有一些重要的不同之處:

// Object 的鍵是 字串 和 Symbol (en-US)，而它們在 Map 中可以是任意的資料型態，包括函數，對象以及原始的資料型態。
// 你可以使用 size 屬性輕鬆地獲得 Map 的大小，而 Object 中的屬性數量必須手動確認。
// Map 是可迭代（iterable (en-US)）的，因此可以直接迭代，而在 Object 上迭代則需要以某種方式獲取其鍵並對其進行迭代。
// Object 有一個原型，所以如果不小心，映射中有一些默認鍵可能與鍵發生衝突。從 ES5 開始，這可以通過使用 map = Object.create(null) 來繞過這個問題，但是很少這樣做。
// 在涉及頻繁添加和刪除鍵值對的場景中，Map 可能表現得更好。
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name")); // Classico Italiano
console.log(rest.get(true)); // We are open :D

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close"))); // We are open :D

console.log(rest.has("categories")); // true
rest.delete(2);
console.log(rest);
console.log(rest.size); // 7

rest.set([1, 2], "test");
console.log(rest.get([1, 2])); // return undefined!!!

const arr = [2, 2];
rest.set(arr, "Correct");
console.log(rest.get(arr)); // Correct

console.log(rest.set(document.querySelector("h1"), "Heading"));

// another way to create map without using set
const question = new Map([
  ["question", "What is the best programming language in the world?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again!"],
]);
console.log(question);

// Convert object to map
console.log(Object.entries(openingHours)); // [ [ "thu", { open: 12, close: 22 } ], [ "fri", { open: 11, close: 23 } ], [ "sat", { open: 0, close: 24 } ] ]
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// quizz app
console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

const answer = Number(prompt("Your answer"));
console.log(question.get(answer === question.get("correct")));

// Convert map to array
console.log([...question]);
console.log([...question.entries()]);
console.log([...question.keys()]);
console.log([...question.values()]);
