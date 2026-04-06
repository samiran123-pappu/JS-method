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
  displayCars();
  cars.sort(function (a, b) {
    return a.year - b.year;
  });
  displayCars();
