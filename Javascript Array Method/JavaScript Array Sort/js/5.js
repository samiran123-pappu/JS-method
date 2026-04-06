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