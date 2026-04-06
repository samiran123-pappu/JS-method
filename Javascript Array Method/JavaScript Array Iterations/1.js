console.log("\n\n\n\n0--------------------\n\n");
{
  const numbers = [45, 4, 9, 16, 25];
  let txt = "";
  function myFunction(value, index, array) {
    txt += value + " ";
  }

  numbers.forEach(myFunction);
  console.log(txt);
  console.log(numbers);
}
console.log("\n\n\n\n1--------------------\n\n");
{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map(myFunction);

  function myFunction(v, i, a) {
    return v * 2;
  }
  console.log(numbers2);
  console.log(numbers1);
}
console.log("\n\n\n\n2--------------------\n\n");
{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map((a) => [a * 2, a]);

  console.log(numbers1);
  console.log(numbers2);
}
console.log("\n\n\n\n3--------------------\n\n");
{
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.flatMap((a) => [a * 2, a]);

  console.log(numbers2);
  console.log(numbers1);
}

console.log("\n\n\n\n4--------------------\n\n");

{
  const numbers = [45, 4, 9, 16, 25];

  function myFunction(v, i, a) {
    return v > 18;
  }

  const over18 = numbers.filter(myFunction);
  // const over18 = numbers.forEach(myFunction);
  console.log(over18);
  console.log(numbers);
}

console.log("\n\n\n\n5--------------------\n\n");

{
  const numbers = [45, 4, 9, 16, 25, 100];
  let sum = numbers.reduce(callbackfn, 0);

  function callbackfn(t, v, i, a, d, d, d, d) {
    return t + v;
  }
  console.log(sum);
  console.log(numbers);
}

console.log("\n\n\n\n6--------------------\n\n");

{
  const numbers = [45, 4, 9, 16, 25, 100];
  let sum = numbers.reduceRight(callbackfn, 0);

  function callbackfn(t, v, i, a, d, d, d, d) {
    return t + v;
  }
  console.log(sum);
  console.log(numbers);
}

console.log("\n\n\n\n7--------------------\n\n");

{
  const numbers = [45, 4, 9, 16, 25];
  let sum = numbers.reduceRight(myFunction);

  function myFunction(total, value) {
    return total + value;
  }
  console.log(sum);
  console.log(numbers);
}

console.log("\n\n\n\n8--------------------\n\n");
{
  const numbers = [45, 4, 9, 16, 25];
  function myFunction(value, index, array) {
    return value > 1;
  }
  let every1 = numbers.every(myFunction);
  console.log(every1);
  console.log(numbers);
}

console.log("\n\n\n\n\n9------------------------------------------------\n\n");
{
  const numbers = [45, 4, 9, 16, 25];
  const some1 = numbers.some(myFunction);
  let every1 = numbers.every(myFunction);

  console.log(every1);
  console.log(some1);
  console.log(numbers);
  // console.log(numbers);
  function myFunction(value, index, array) {
    return value > 18;
  }
}

console.log("\n\n\n\n\n10------------------------------------------------\n\n");

{
  let text = "Hello world, welcome to the universe.";
  let a = Array.from(text);
  console.log(text);
  console.log(Array.isArray(text));
  console.log("\n\n\n");
  console.log(a);
  console.log(Array.isArray(a));
}

console.log("\n\n\n\n\n11-----------------------------------\n\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const keys = fruits.keys();
  let text = " ";

  for (let x of keys) {
    text += x + " ";
  }

  console.log(text);
}
console.log("\n\n\n\n\n12-----------------------------------\n\n");
{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const f = fruits.entries();
  let text = " ";
  for (let x of f) {
    text += x;
  }
  console.log(text);
  console.log("original array:", fruits);
}

console.log("\n\n\n\n\n13-----------------------------------\n\n");

{
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  const f = fruits.entries();
  const f1 = fruits.keys();

  let text = " ";
  let text1 = " ";
  for (let x of f) {
    text1 += x + " ";
  }
  for (let y of f1) {
    text += y + " ";
  }
  console.log("entries:", text1);
  console.log("keys:", text);
  console.log("original array:", fruits);
}

console.log("\n\n\n\n\n14-----------------------------------\n\n");
{
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const myMonths = months.with(2, "March");
  console.log(months);
  console.log(myMonths);
}

console.log("\n\n\n\n\n15-----------------------------------\n\n");

{
  const q1 = [1, 2, 3];
  const q2 = [4, 5, 6];
  const q3 = q1.concat(q2);
  console.log(q1);
  console.log(q2);
  console.log(q3);
  console.log("\n\n\n\n");

  {
    const q1 = [1, 2, 3];
    const q2 = [4, 5, 6];
    const q3 = [...q1, ...q2];
    console.log(q1);
    console.log(q2);
    console.log(q3);
  }
}

console.log("\n\n\n\n\n16-----------------------------------\n\n");
{
  const q1 = [1, 2, 3];
  const q2 = [...q1];
}

console.log("\n\n\n\n\n17-----------------------------------\n\n");
{
  const q1 = [1, 2, 3];
  const q2 = Math.min(...q1);
  const q3 = Math.max(...q1);
  console.log(q2);
  console.log(q3);
}
console.log("\n\n\n\n\n18-----------------------------------\n\n");
{
  let a, b, rest;
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  [a, b, ...rest] = arr;
  console.log(a);
  console.log(b);
  console.log(rest);

  console.log("\n\n\n-----");
  {
    let a, b, rest;
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];
    [a, b, ...rest] = arr;
    console.log(a);
    console.log(b);
    console.log(rest);
  }
}
