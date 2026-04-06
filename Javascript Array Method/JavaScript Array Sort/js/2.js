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