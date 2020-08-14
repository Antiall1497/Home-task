'use strict'

// 1 Задание

function simpleNumber(digit) {
    if (digit < 2) {
      return false;
    } else if (digit === 2) {
      return true;
    }
  
    let i = 2;
    const limit = Math.sqrt(digit);
  
    while (i <= limit) {
      if (digit % i === 0) {
        return false;
      }
      i += 1;
    }
  
    return true;
  }
  
  console.log(simpleNumber(3));
  console.log(simpleNumber(4));
  console.log(simpleNumber(5));


  //2 Задание

  function primeNumber(a, b) {
    return a % b === 0 ? true : false;
  }
  
  console.log(primeNumber(25, 5));
  console.log(primeNumber(15, 3));
  console.log(primeNumber(15, 5));
  console.log(primeNumber(15, 4));

  // 3 Задание

  function isTriangle(a, b, c) {
    return a + b > c && a + c > b && b + c > a
      ? "Треугольник существует"
      : "Треугольник не существует";
  }
  
  console.log(isTriangle(5, 4, 3));

  // 4 Задание

  function areaOfATriangle(a, h) {
    return 0.5 * a * h;
  }
  
  console.log(areaOfATriangle(5, 2));
  
  function rectangleArea(a, b) {
    return a * b;
  }
  
  console.log(rectangleArea(3, 5));

  // Массивы, объекты

  const student = {
    name: "Александр",
    surname: "Антипов",
    gender: "Муж.",
    details: "Телефон:+999999999999",
  },
  chair = {
    course: "1",
    chair: "Программистика",
  },
  numberArray = [],
  randomNumberArray = [];

// просто заполняем
for (let i = 0; i < 100; i++) numberArray.push(i);

console.log(numberArray); // результат

for (let i = 0; i < 100; i++)
  randomNumberArray.push(
    Math.floor(Math.random() * (Math.floor(99999999) - Math.ceil(0))) +
      Math.ceil(0)
  );

  console.log(numberArray.length, randomNumberArray.length); // размеры массивов

numberArray.forEach((number, i) => {
  if (i % 2 === 0) console.log(number); // четные выводим по индексу
});

console.log("-".repeat(30));

randomNumberArray.forEach((number, i) => {
  if (i % 2 === 0) console.log(number); // четные выводим по индексу
});

console.log("-".repeat(30));

numberArray.forEach((number) => {
  if (number % 2 === 0) console.log(number); // четные выводим
});

console.log("-".repeat(30));

randomNumberArray.forEach((number) => {
  if (number % 2 === 0) console.log(number); // четные выводим
});

console.log("-".repeat(30));

numberArray.forEach((number, i) => {
  if (number === 0) console.log(i); // нулевой индекс
});

console.log("-".repeat(30));

randomNumberArray.forEach((number) => {
  if (number === 0) console.log(i); // нулевой индекс
});

console.log(numberArray.reduce((a, b) => (b === 0 ? a + 1 : a + 0), 0));

function Book(obj) {
    this.book = obj;
  
    this.showBook = () => {
      for (let [key, val] of Object.entries(this.book)) {
        console.log(key, val);
      }
    };
  }
  
  let book = new Book({
    author: "Александр Авраменко",
    name: "100 експрес-уроків української",
    year: 2020,
    publisher: "#книголав",
  });
  
  let electronBook = new Book({
    author: "Александр Авраменко",
    name: "100 експрес-уроків української",
    year: 2020,
    publisher: "#книголав",
    version: 700344,
    format: "PDF",
  });
  
  book.showBook();
  
  console.log("-".repeat(30));
  
  electronBook.showBook();

  function MyArray(array) {
    this.array = array;
  
    this.pop = () => {
      this.array = this.array.slice(0, this.array.length - 1);
    };
  
    this.push = (elem) => {
      this.array = [...this.array, elem];
    };
  
    this.forEach = (f) => {
      for (let i in this.array) f(this.array[i], i);
    };
  
    this.show = () => console.log(this.array);
  }
  
  let array = new MyArray([1, 2, 3, 4, 5]);
  
  array.pop();
  array.show();
  array.push(6);
  array.show();
  array.forEach((number, i) => console.log(number, i));

  function division(number) {
    let num = number;
  
    if (number % 5 === 0) number = 5;
    else if (number % 3 === 0) number = 3;
    else if (number % 2 === 0) number = 2;
  
    switch (number) {
      case 5:
        console.log(`${num} делиться на 5`);
        break;
      case 3:
        console.log(`${num} делиться на 3`);
        break;
      case 2:
        console.log(`${num} делиться на 2`);
        break;
      default:
        break;
    }
  }
  
  division(9);


  let result = null;

switch (1) {
  case 1:
    result = "Зима";
    break;
  case 2:
    result = "Весна";
    break;
  case 3:
    result = "Лето";
    break;
  case 4:
    result = "Осень";
  default:
    break;
}

console.log(result);

let month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

switch (month[1]) {
  case 1:
    console.log("Зима");
    break;
  case 2:
    console.log("Зима");
    break;
  case 3:
    console.log("Весна");
    break;
  case 4:
    console.log("Весна");
    break;
  case 5:
    console.log("Весна");
    break;
  case 6:
    console.log("Лето");
    break;
  case 7:
    console.log("Лето");
    break;
  case 8:
    console.log("Лето");
    break;
  case 9:
    console.log("Осень");
    break;
  case 10:
    console.log("Осень");
    break;
  case 11:
    console.log("Осень");
    break;
  case 12:
    console.log("Зима");
    break;

  default:
    break;
}

function dayOfWeek(day) {
    let days = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];
  
    return 0 <= day - 1 && day - 1 <= 7 ? days[day - 1] : "Введен неверный день недели";
  }
  
  console.log(dayOfWeek(7));
  5
  function decade(day) {
    if (day <= 10) console.log("Первая декада");
    else if (day <= 21) console.log("Вторая декада");
    else if (day <= 31) console.log("Третья декада");
    else console.log("Введите коректное число");
  }
  
  decade(239);
  6
  let n = 5;
  for (var f = 1; n; f *= n--);
  
  console.log(f);
  7
  let n = 100,
    sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  
  console.log(sum);
  8
  let iterator = {
    from: 5,
    to: 12,
    *[Symbol.iterator]() {
      for (let i = this.from; i <= this.to; i++) {
        yield i;
      }
    },
  };
  
  for (let i of iterator) console.log(i);