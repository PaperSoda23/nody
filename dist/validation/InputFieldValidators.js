/**
 * @description
 * cheks if string is not empty
 * @param fieldValue raw field input string
 */
var isNotEmpty = function (fieldValue) { return !!fieldValue.trim(); };
/**
 * @description
 * checks if string can be converted to positive number
 * @param fieldValue raw field input string
 */
var isPositive = function (fieldValue) { return +fieldValue > 0; };
/**
 * @description
 * checks if string is a valid integer
 * @param fieldValue raw field input string
 */
var isInt = function (fieldValue) { return /^[0-9]\d*$/.test(fieldValue); };
/**
 * @description
 * checks if date is a valid date
 * @code alternative:
 * var t = new Date('2011-07-07T11:20:00.000+00:00x');
 * valid = !isNaN(t.valueOf());
 * @param fieldValue raw field input string
 */
var isDate = function (fieldValue) { return !isNaN(Date.parse(fieldValue)); };
export { isNotEmpty, isPositive, isInt, isDate };
//# sourceMappingURL=InputFieldValidators.js.map