console.log("\n\n\n\n\n00------------------------------\n");
{
  const fruits = ["banana", "orange", "apple", "mango"];
  const no = [5, 6, 7, 8, 9, -1, 0, 1, 2, 3, 4];
  console.log(fruits.sort());
  console.log(fruits);
  console.log(no.sort());
  console.log(no);
}
console.log("\n\n\n\n\n1------------------------------\n");
{
  const fruits = ["banana", "orange", "apple", "mango"];
  const no = [5, 6, 7, 8, 9, -1, 0, 1, 2, 3, 4];
  console.log(fruits.reverse());
  console.log(fruits);
  console.log(no.sort());
  console.log(no);
}
console.log("\n\n\n\n\n2------------------------------\n");
{
  const fruits = ["banana", "orange", "apple", "mango"];
  const no = [5, 6, 7, 8, 9, -1, 0, 1, 2, 3, 4];
  console.log(fruits.toSorted());
  console.log(fruits);
  console.log(no.sort());
  console.log(no);
}

console.log("\n\n\n\n\n3------------------------------\n");
{
  const fruits = ["banana", "orange", "apple", "mango"];
  const no = [5, 6, 7, 8, 9, -1, 0, 1, 2, 3, 4];
  console.log(fruits.toReversed());
  console.log(fruits);
  console.log(no.toSorted());
  console.log(no);
}
console.log("\n\n\n\n\n4------------------------------\n");
{
  const points = [40, 100, 1, 5, 25, 10];

  // Numerical Ascending Sort
  points.sort(function (a, b) {
    console.log(`Comparing ${a} and ${b}: Result is ${a - b}`);
    return a - b;
  });

  console.log("Sorted Array:", points);
  // Output: [1, 5, 10, 25, 40, 100]
}
console.log("\n\n\n\n\n5------------------------------\n");
{
  const items = ["25", "100", "Apple", "apple"];

  items.forEach((item) => {
    console.log(`Item: ${item} | First Char Code: ${item.charCodeAt(0)}`);
  });

  // Output:
  // Item: 25    | Code: 50 (for '2')
  // Item: 100   | Code: 49 (for '1')
  // Item: Apple | Code: 65 (for 'A')
  // Item: apple | Code: 97 (for 'a')
  // Output: [1, 5, 10, 25, 40, 100]
}

console.log("\n\n\n\n\n6------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  points.sort((a, b) => b - a);
  console.log("Sorted Array (Descending):", points);
  // Output: [100, 40, 25, 10, 5, 1]
}
console.log("\n\n\n\n\n7------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  points.sort((a, b) => a - b);
  console.log("Sorted Array (Ascending):", points);
  // Output: [1, 5, 10, 25, 40, 100]
}
console.log("\n\n\n\n\n8------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  const fruits = ["banana", "orange", "apple", "mango"];
  console.log(fruits.sort());

  points.sort((a, b) => a - b);
  console.log("Sorted Array (Ascending):", points);
  // Output: [1, 5, 10, 25, 40, 100]
}
console.log("\n\n\n\n\n8------------------------------\n");

{
  const points = ["1", "5", "10", "25", "40", "100"];
  const fruits = ["banana", "orange", "apple", "mango"];
  console.log(fruits.sort());

  points.sort((a, b) => a - b);
  // console.log("Sorted Array (Ascending):", points.sort());
  console.log("Sorted Array (Ascending):", points);
  // Output: [1, 5, 10, 25, 40, 100]
}
console.log("\n\n\n\n\n9------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  console.log(points);
  //   document.getElementById("demo").innerHTML = points;

  function myFunction1() {
    points.sort();
    console.log(points);
  }

  function myFunction2() {
    points.sort(function (a, b) {
      return a - b;
    });
    console.log(points);
  }
  myFunction1();
  myFunction2();
}

console.log("\n\n\n\n\n10------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  console.log(
    points.sort(() => {
      return 0.5 - Math.random();
    }),
  );
}

console.log("\n\n\n\n\n11------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  for (let i = points.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = points[i];
    points[i] = points[j];
    points[j] = k;
  }
  console.log(points);
}
console.log("\n\n\n\n\n12------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  let a = points.sort((a, b) => a - b);
  console.log(a);
}
console.log("\n\n\n\n\n13------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  let a = points.sort((a, b) => b - a);
  console.log(a);
}
console.log("\n\n\n\n\n14------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  console.log(myArrayMin(points)); // declaration can be hoisted
  function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
}
console.log("\n\n\n\n\n15------------------------------\n");

{
  const points = [40, 100, 1, 5, 25, 10];
  console.log(myArrayMax(points)); // declaration can be hoisted
  function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }
}
console.log("\n\n\n\n\n16------------------------------\n");

{
  const arr = [40, 100, 1, 5, 25, 10];
  function myArrayMin(arr) {
    let len = arr.length;
    let min = Infinity;
    for (; len--; ) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;;
  }
  console.log(myArrayMin(arr));
}
console.log("\n\n\n\n\n17------------------------------\n")

{
  const arr = [40, 100, 1, 5, 25, 10];
  function myArrayMax(arr) {
    let len = arr.length;
    let max = -Infinity;
    for (; len--; ) {
      if (arr[len] > max) {
        max = arr[len];
      }
    }
    return max;
  }
  console.log(myArrayMax(arr));
}
console.log("\n\n\n\n\n18------------------------------\n");

{
  const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
  ];

  function displayCars() {
    console.log(
      cars[0].type +
        " " +
        cars[0].year +
        " " +
        cars[1].type +
        " " +
        cars[1].year +
        " " +
        cars[2].type +
        " " +
        cars[2].year,
    );
  }
  // displayCars();
  cars.sort(function (a, b) {
    return b.year - a.year;
  });
  displayCars();
}

console.log("\n\n\n\n\n19------------------------------\n");
{
  const cars = [
    { type: "Volvo", year: 2016 },
    { type: "Saab", year: 2001 },
    { type: "BMW", year: 2010 },
  ];
  displayCars();
  function myFunction() {
    cars.sort(function (a, b) {
      let x = a.type.toLowerCase();
      let y = b.type.toLowerCase();
      if (x < y) {
        return -1;
      }
      if (x > y) {
        return 1;
      }
      return 0;
    });
    displayCars();
  }

  function displayCars() {
    console.log(
      cars[0].type +
        " " +
        cars[0].year +
        " " +
        cars[1].type +
        " " +
        cars[1].year +
        " " +
        cars[2].type +
        " " +
        cars[2].year,
    );
  }

  myFunction();
}

console.log("\n\n\n\n\n20------------------------------\n");
{
  const myArr = [
    { name: "X00", price: 100 },
    { name: "X01", price: 100 },
    { name: "X02", price: 100 },
    { name: "X03", price: 100 },
    { name: "X04", price: 110 },
    { name: "X05", price: 110 },
    { name: "X06", price: 110 },
    { name: "X07", price: 110 },
    { name: "X08", price: 120 },
    { name: "X09", price: 120 },
    { name: "X10", price: 120 },
    { name: "X11", price: 120 },
    { name: "X12", price: 130 },
    { name: "X13", price: 130 },
    { name: "X14", price: 130 },
    { name: "X15", price: 130 },
    { name: "X16", price: 140 },
    { name: "X17", price: 140 },
    { name: "X18", price: 140 },
    { name: "X19", price: 140 },
  ];

  myArr.sort((p1, p2) => {
    if (p1.price < p2.price) return -1;
    if (p1.price > p2.price) return 1;
    return 0;
  });

  let txt = "";
  myArr.forEach(myFunction);

  function myFunction(value) {
    txt += value.name + " " + value.price + " ";
  }

  console.log(txt);
}
console.log("\n\n\n\n\n21------------------------------\n");
{
  const myArr =[
    { name: "X00", price: 100 },
    { name: "X01", price: 100 },
    { name: "X02", price: 100 },
    { name: "X03", price: 100 },
    { name: "X04", price: 110 },
    { name: "X05", price: 110 },
    { name: "X06", price: 110 },
    { name: "X07", price: 110 },
    { name: "X08", price: 120 },
    { name: "X09", price: 120 },
    { name: "X10", price: 120 },
    { name: "X11", price: 120 },
    { name: "X12", price: 130 },  
    { name: "X13", price: 130 },
    { name: "X14", price: 130 },
    { name: "X15", price: 130 },
    { name: "X16", price: 140 },
    { name: "X17", price: 140 },
    { name: "X18", price: 140 },
    { name: "X19", price: 140 },

  ]

  myArr.sort((p1, p2 ) => {
    if (p1.price < p2.price ) return -1;
    if (p1.price > p2.price ) return 1;
    return 0;
  })

  let txt = "";
  myArr.forEach(myFunction)
  function myFunction(value){
    txt += value.name + " " + value.price + " ";
  }
  console.log(txt);
}