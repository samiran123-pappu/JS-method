const points = [40, 100, 1, 5, 25, 10];
// points.sort(() => 0.5 - Math.random());
points.sort((a,b) => a - b );
console.log(points);