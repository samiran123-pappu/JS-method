# Complete Number Reference

This folder contains runnable JavaScript examples for the full number reference list.

## Files

- `00-number-constructor.js`
- `01-epsilon.js`
- `02-is-finite.js`
- `03-is-integer.js`
- `04-is-nan.js`
- `05-is-safe-integer.js`
- `06-max-safe-integer.js`
- `07-min-safe-integer.js`
- `08-max-value.js`
- `09-min-value.js`
- `10-nan.js`
- `11-negative-infinity.js`
- `12-positive-infinity.js`
- `13-parse-float.js`
- `14-parse-int.js`
- `15-prototype.js`
- `16-to-exponential.js`
- `17-to-fixed.js`
- `18-to-locale-string.js`
- `19-to-precision.js`
- `20-to-string.js`
- `21-value-of.js`

## Method Map

- `constructor` -> `00-number-constructor.js`
- `EPSILON` -> `01-epsilon.js`
- `isFinite()` -> `02-is-finite.js`
- `isInteger()` -> `03-is-integer.js`
- `isNaN()` -> `04-is-nan.js`
- `isSafeInteger()` -> `05-is-safe-integer.js`
- `MAX_SAFE_INTEGER` -> `06-max-safe-integer.js`
- `MIN_SAFE_INTEGER` -> `07-min-safe-integer.js`
- `MAX_VALUE` -> `08-max-value.js`
- `MIN_VALUE` -> `09-min-value.js`
- `NaN` -> `10-nan.js`
- `NEGATIVE_INFINITY` -> `11-negative-infinity.js`
- `POSITIVE_INFINITY` -> `12-positive-infinity.js`
- `parseFloat()` -> `13-parse-float.js`
- `parseInt()` -> `14-parse-int.js`
- `prototype` -> `15-prototype.js`
- `toExponential()` -> `16-to-exponential.js`
- `toFixed()` -> `17-to-fixed.js`
- `toLocaleString()` -> `18-to-locale-string.js`
- `toPrecision()` -> `19-to-precision.js`
- `toString()` -> `20-to-string.js`
- `valueOf()` -> `21-value-of.js`

## Notes

- `Number.parseFloat()` and `Number.parseInt()` behave like the global `parseFloat()` and `parseInt()`.
- `Number.prototype` can be extended, but doing that in real projects is usually avoided.
- `toLocaleString()` output depends on the JavaScript engine and locale support.
