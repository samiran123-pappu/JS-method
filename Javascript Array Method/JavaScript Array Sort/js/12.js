console.log("\n\n\n------------------\n\n");


const points = [40, 100, 1, 5, 25, 10];

for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
console.log(points);
console.log("\n\n\n------------------\n\n");

{
    const points = [40, 100, 1,5, 25 , 10];
    for(let i = points.length -1; i > 0; i--){
        let j = Math.floor(Math.random() * ( i + 1));
        let k = points[i];
        points[i ] = points[j];
        points[j] = k;
    }
    console.log(points);
}
console.log("\n\n\n------------------\n\n");

{
const points = [40, 100, 1, 5, 25, 10];


function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
let a = myArrayMax(points)
console.log(a);
}