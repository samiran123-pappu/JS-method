console.log("\n\n\n\n0------------------------------\n");

{
  const a = [1, 2, 3, 4, 5];
  const b = a.length;
  console.log(b);
}
console.log("\n\n\n\n1------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  console.log(typeof a);
  const b = a.toString();
  console.log(b);
  console.log(typeof b);
}
console.log("\n\n\n\n2------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  let b = a.toString();
  console.log(Array.isArray(a));
  console.log(Array.isArray(b));
}
console.log("\n\n\n\n3------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  let b = a.at(2);
  let b1 = a[2];
  console.log(b);
  console.log(b1);
}
console.log("\n\n\n\n4------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  let b = a.at(-2);
  let b1 = a[2];
  console.log(b);
  console.log(b1);
}
console.log("\n\n\n\n5------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  let b = a.join("-");
  console.log(b);
}
console.log("\n\n\n\n6------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  let b = a.pop();
  console.log(b);
  console.log(b, " removed from ", a);
}
console.log("\n\n\n\n7------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  console.log(a.length);
  let b = a.push(6);
  console.log(b);
  console.log(a);
}
console.log("\n\n\n\n8------------------------------\n");
{
  const a = [1, 2, 3, 4, 5, "yes", "no"];
  let b = a.shift();
  let b1 = a.pop();
  console.log(b, b1);
  console.log(a);
}
console.log("\n\n\n\n9------------------------------\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits);
  fruits.unshift("Lemon");
  console.log(fruits);
  fruits.shift("Lemon");
  console.log(fruits);
  fruits.pop();
  console.log(fruits);
  fruits.push("Lemon");
  console.log(fruits);
}
console.log("\n\n\n\n10------------------------------\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log(fruits[0].length);
  console.log(fruits[1].length);
  console.log(fruits[2].length);
  console.log(fruits[3].length);
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
  console.log(fruits[3]);
  fruits.unshift("Lemon");
  console.log(fruits);
  console.log(fruits[0].length);
  console.log(fruits[1].length);
  console.log(fruits[2].length);
  console.log(fruits[3].length);
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
  console.log(fruits[3]);
  fruits.shift("Lemon");
  console.log(fruits);
  console.log(fruits[0].length);
  console.log(fruits[1].length);
  console.log(fruits[2].length);
  console.log(fruits[3].length);
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
  console.log(fruits[3]);
  fruits.pop();
  console.log(fruits);
  fruits.push("Lemon");
  console.log(fruits[0].length);
  console.log(fruits[1].length);
  console.log(fruits[2].length);
  console.log(fruits[3].length);
  console.log(fruits[0]);
  console.log(fruits[1]);
  console.log(fruits[2]);
  console.log(fruits[3]);
  console.log(fruits);
}

console.log("\n\n\n\n11------------------------------\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits[fruits.length] = "Kiwi";
  console.log(fruits);
}
console.log("\n\n\n\n12------------------------------\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits[fruits.length] = "Kiwi";
  console.log(fruits);
  console.log(Array.isArray(fruits));
}
console.log("\n\n\n\n13------------------------------\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  fruits.pop();
  console.log(fruits);
  delete fruits[0];
  console.log(fruits);
}
console.log("\n\n\n\n14------------------------------\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  console.log("fruits:", fruits);
  let b = fruits.pop();
  console.log(".pop()", b);
  console.log(fruits.concat("Kiwi", b));
}
console.log("\n\n\n\n15------------------------------\n");
{
  const arr1 = ["Cecilie", "Lone"];
  const arr2 = ["Emil", "Tobias", "Linus"];
  const arr3 = ["Robin", "Morgan"];
  const myChildren = arr1.concat(arr2, arr3);
  console.log(myChildren);
}
console.log("\n\n\n\n16------------------------------\n");
{
  const arr1 = ["Cecilie", "Lone"];
  const arr2 = ["Emil", "Tobias", "Linus"];
  const arr3 = ["Robin", "Morgan"];
  const myChildren = arr1.concat(arr2, arr3);
  console.log(myChildren);
}
console.log("\n\n\n\n17------------------------------\n");
{
  const arr1 = ["Cecilie", "Lone", 2, 4, 5, 4, 5, 5, 6, 7, 8, 8];
  const arr2 = ["Emil", "Tobias", "Linus"];
  const arr3 = ["Robin", "Morgan"];
  const myChildren = arr1.copyWithin(9, 1, -1);
  console.log(myChildren);
}
console.log("\n\n\n\n18------------------------------\n");
{
  const a = ["a", "b", "c", "d", "e", "t", "u", "v"];
  const b = a.copyWithin(6, 3, 5);
  console.log(b);
}

console.log("\n\n\n\n19------------------------------\n");
{
  const arr = [0, 1, 2, 3, 4, 5, 6];
  const b = arr.copyWithin(3, 0, 2);
  console.log(b);
}

console.log("\n\n\n\n20------------------------------\n");

{
  const myArr = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const newArr = myArr.flat();
  console.log(newArr);
}
console.log("\n\n\n\n21------------------------------\n");

{
  const myArr = [1, 2, 3, 4, 5, 6];
  const newArr = myArr.flatMap((x) => [x, x * 10]);
  console.log(newArr);
}

console.log("\n\n\n\n22------------------------------\n");

{
  const myArr = [0, 1, 2, 3, 4, 5, 6];
  const newArr = myArr.copyWithin(3, 0, 5); // "Overwriting"(replace element from their index)
  console.log(newArr);
}
console.log("\n\n\n\n23------------------------------\n");

{
  const fruits = ["Banana0", "Orange1", "Apple2", "Mango3"];
  fruits.splice(2, 0, "Lemon", "Kiwi"); //  Displacement(shift element from their index)
  console.log(fruits);
}
console.log("\n\n\n\n24------------------------------\n");

{
  const fruits = ["Banana0", "Orange1", "Apple2", "Mango3"];
  fruits.splice(0, 1); //  Displacement(shift element from their index)
  console.log(fruits);
}
console.log("\n\n\n\n25------------------------------\n");

{
  const months = ["0Jan", "1Feb", "2Mar", "3Apr"];
  const spliced = months.toSpliced(0, 1);
  console.log(spliced);
}
console.log("\n\n\n\n26------------------------------\n");

{
  const months = ["0Jan", "1Feb", "2Mar", "3Apr"];
  const spliced = months.slice(0, -3);
  console.log(spliced);
  console.log(months);
}
console.log("\n\n\n\n27------------------------------\n");

{
  const fruits = ["0Banana", "1Orange", "2Lemon", "3Apple", "4Mango"];
  const citrus = fruits.slice(2);
  const citru1 = fruits.slice(1, 3);
  console.log(citrus);
  console.log(citru1);
}

console.log("\n\n\n\n28------------------------------\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  let b = fruits.toString();
  let b1 = JSON.stringify(b);
  console.log(b);
  console.log(b1);
}
