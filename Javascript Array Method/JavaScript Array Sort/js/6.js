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