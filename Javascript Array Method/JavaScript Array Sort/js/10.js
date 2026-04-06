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