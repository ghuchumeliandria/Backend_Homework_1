/*
1) დაითვალეთ დადებითი რიცხვები / შეკრიბეთ უარყოფითი რიცხვები:
გაქვთ მასივი: const nums = [1,2,3,4,5,6,7,8,9,10,-11,-12,-13,-14,-15], უნდა დააბრუნოს: [10, -65]

*/
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// let posNum = 0;
// let sum = 0;

// nums.forEach((num) => {
//   if (num > 0) {
//     posNum++;
//   } else {
//     sum += num;
//   }
// });
// console.log(posNum, sum, "task1");

const arr1 = nums.reduce(
  (num, curr) => {
    if (curr > 0) {
      num[0]++;
    } else {
      num[1] += curr;
    }

    return num;
  },
  [0, 0]
);

console.log(arr1, "task1");

/*
2) აიღეთ რიცხვების მასივი, გაამრავლეთ ყველა ელემენტი 2 ზე, და შემდეგ გაფილტეთ ეს მასივი იმ რიცვებზე რომლებიც იყოფა 3ზე.
*/
const nums2 = [7, 14, 3, 19, 11, 2, 16, 8, 20, 5];
const newArr = nums2
  .map((num) => {
    return num * 2;
  })
  .filter((num) => num % 3 === 0);
console.log(newArr, "task2");

/*
3) შექმენით ფუნცქცია რომელიც დააბრუნებს ბოლო ორი ყველაზე პარატა რიცხვის ჯამს: e.g:[19, 5, 42, 2, 77] => 7
*/
const arr3 = [19, 5, 42, 2, 77];
let sum2 = [];
function smallest() {
  arr3.sort(compareNumbers);
  sum2 = arr3[0] + arr3[1];
}

function compareNumbers(a, b) {
  return a - b;
}

smallest();
console.log(sum2, "task3");

/*
4)შექმენით ფუნცქია სადაც შეადარებთ ამ ორ მასივს ერთმანეთს და დააბრუნეთ ახალ მასივს ყველაზე დიდი რიცხვებით: 
let arr1 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
// Returns [23, 64, 53, 17, 88]

*/
let arr5 = [13, 64, 15, 17, 88];
let arr2 = [23, 14, 53, 17, 80];
let newArr2 = [];
let num3 = 0;
function getLargerNumbers(arr1, arr2) {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > arr2[i]) {
      num3 = arr1[i];
    } else {
      num3 = arr2[i];
    }
    newArr2.push(num3);
  }
}

getLargerNumbers(arr5, arr2);
console.log(newArr2, "task4");

/*
 */
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

characters.map((item) => {
  console.log(item.name, "task5");
});

const firstName = characters.map((item) => item.name.split(" ")[0]);
console.log(firstName, "task5");
const eyeColor = characters.reduce((total, curr) => {
  const color = curr.eye_color;

  if (!total[color]) {
    total[color] = 0;
  }

  total[color] += 1;

  return total;
}, {});

console.log(eyeColor, "task5");

/*
მოცემულ მასივზე გააკეთეთ შემდეგი ტასკები: 
* Get an array of all names
*  Get an array of all first names
* დააჯგუფეთ თვალის ფერის მიხედვით, გამოიყენეთ რედიუსი და უნდა მიიღოთ შემდეგი შედეგი: 
{blue: 2, brown: 1, yellow: 1}
როგორც ხედავთ ლექციაზე რაც ვქენით ოდნავ განსხვავებულია, აქ გვაინტერებსე დავითვალოთ რამდენი განსხვავებული თვალის ფერი აქვთ.


*/

const movies = [
  { title: "Inception", year: 2010, rating: 8.8 },
  { title: "Interstellar", year: 2014, rating: 8.6 },
  { title: "Tenet", year: 2020, rating: 7.5 },
  { title: "Dunkirk", year: 2017, rating: 7.9 },
];

const filteredMovies = movies.filter((movie) => movie.rating > 8);
const namesArr = [];
movies.map((name) => {
  namesArr.push(name.title);
});
console.log(filteredMovies, "task6");
console.log(namesArr.sort(), "task6");

/*
  * გაფილტრეთ მარტო ისეთი ფილმები რომელთა რეიტინგიც არის 8ზე მეტი
  * ამოიღეთ მხოლოდ სახელები
  * დაალაგეთ ეს სახელები ანბანის მიხედვით
  
*/
const students = [
  { name: "Lia", scores: [90, 85, 100] },
  { name: "Tom", scores: [70, 60, 75] },
  { name: "Mia", scores: [88, 92, 95] },
];
students.map((student) => {
  const arr = student.scores.reduce((total, curr) => total + curr, 0);
  const average = Math.round(arr / student.scores.length);
  student.average = average;
});
const filteredStudents = students.filter((student) => student.average > 85);
console.log(filteredStudents, "task7");

/*
  * გამოიყენეთ map და reduce მეთოდები და დაუმატეთ თითეულ ობიექტს average ფილდი შემდეგ გაფილტრეთ და დააბრუნეთ მხოლოდ 85ზე მეტი ვისაც აქვს საშუალო ქულა ეგ სტუდენდები.

*/

const employees = {
  alice: { department: "HR", active: true },
  bob: { department: "Engineering", active: false },
  charlie: { department: "Engineering", active: true },
};
const objc2 = {};

for (let [key, value] of Object.entries(employees)) {
  if (value.active === true) {
    const depart = value.department;
    if (!objc2[depart]) {
      objc2[depart] = 0;
    }

    objc2[depart] += 1;
  }
}

console.log(objc2);
/*
  * გადაუარეთ თითოეულ ობიექტს Object.entries მეთოდით, დაითვალეთ რამდენი აქტიური იუზერია თითოეულ დეპარტამენტში და დააბრუნეთ შემდეგი ობიექტი: 
{ HR: 1, Engineering: 1 }

*/
