const fruits = "apple, banana, mango, banana";

console.log('localeCompare("abd" vs "abc"):', "abd".localeCompare("abc"));
console.log('match("banana"):', fruits.match("banana"));

const matches = [...fruits.matchAll(/banana/g)];
console.log(
    "matchAll(/banana/g):",
    matches.map((match) => ({
        value: match[0],
        index: match.index,
    }))
);
