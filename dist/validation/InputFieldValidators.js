/**
 * @description
 * cheks if string is not empty
 * @param fieldValue raw field input string
 */
var isNotEmpty = function (validationErrorMsg) { return function (fieldValue) { return ({
    isValid: !!fieldValue.trim(),
    validationErrorMsg: validationErrorMsg
}); }; };
/**
 * @description
 * checks if string can be converted to positive number
 * @param fieldValue raw field input string
 */
var isPositive = function (validationErrorMsg) { return function (fieldValue) { return ({
    isValid: +fieldValue > 0,
    validationErrorMsg: validationErrorMsg
}); }; };
/**
 * @description
 * checks if string is a valid integer
 * @param fieldValue raw field input string
 */
var isInt = function (validationErrorMsg) { return function (fieldValue) { return ({
    isValid: /^[0-9]\d*$/.test(fieldValue),
    validationErrorMsg: validationErrorMsg
}); }; };
/**
 * @description
 * checks if date is a valid date
 * @code alternative:
 * var t = new Date('2011-07-07T11:20:00.000+00:00x');
 * valid = !isNaN(t.valueOf());
 * @param fieldValue raw field input string
 */
var isDate = function (validationErrorMsg) { return function (fieldValue) { return ({
    isValid: !isNaN(Date.parse(fieldValue)),
    validationErrorMsg: validationErrorMsg
}); }; };
export { isNotEmpty, isPositive, isInt, isDate };
//# sourceMappingURL=InputFieldValidators.js.map