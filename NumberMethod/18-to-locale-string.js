// JavaScript Number.toLocaleString()
// Example

const amount = 1234567.89;

console.log("default locale:", amount.toLocaleString());
console.log("en-US currency:", amount.toLocaleString("en-US"));
console.log(
    "en-IN currency style:",
    amount.toLocaleString("en-IN", { style: "currency", currency: "INR" })
);
