{
  const points = [40, 100, 1, 5, 25, 10];
  console.log(
    points.sort(() => {
      return 0.5 - Math.random();
    }),
  );
}