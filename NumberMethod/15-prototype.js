// JavaScript Number.prototype
// Example

const score = 98;

Number.prototype.addBonus = function (bonus) {
    return this.valueOf() + bonus;
};

console.log("typeof Number.prototype:", typeof Number.prototype);
console.log("score.addBonus(2):", score.addBonus(2));
