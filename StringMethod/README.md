# Complete String Reference

This folder contains runnable JavaScript examples for the full string reference list.

## Files

- `00-string-constructor.js`
- `01-character-access.js`
- `02-search-and-check.js`
- `03-match-and-compare.js`
- `04-combine-and-extract.js`
- `05-replace-and-repeat.js`
- `06-padding-and-trim.js`
- `07-case-conversion.js`
- `08-properties-and-prototype.js`
- `09-well-formed.js`

## Method Map

- `at()`, `charAt()`, `charCodeAt()`, `codePointAt()`, `fromCharCode()` -> `01-character-access.js`
- `endsWith()`, `includes()`, `indexOf()`, `lastIndexOf()`, `search()`, `startsWith()` -> `02-search-and-check.js`
- `localeCompare()`, `match()`, `matchAll()` -> `03-match-and-compare.js`
- `concat()`, `slice()`, `split()`, `substr()`, `substring()` -> `04-combine-and-extract.js`
- `repeat()`, `replace()`, `replaceAll()` -> `05-replace-and-repeat.js`
- `padEnd()`, `padStart()`, `trim()`, `trimEnd()`, `trimStart()` -> `06-padding-and-trim.js`
- `toLocaleLowerCase()`, `toLocaleUpperCase()`, `toLowerCase()`, `toString()`, `toUpperCase()`, `valueOf()` -> `07-case-conversion.js`
- `constructor`, `length`, `prototype` -> `08-properties-and-prototype.js`
- `isWellFormed()`, `toWellFormed()` -> `09-well-formed.js`

## Notes

- `substr()` is deprecated, but included here because it appears in your list.
- `String.fromCharCode()` is a static method on `String`, not an instance method.
- `isWellFormed()` and `toWellFormed()` need a modern JavaScript engine.
