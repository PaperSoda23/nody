import { ValidationResponse } from './ValidationResponse.interface';
import { ValidationErrorMsg } from './ValidationError';
import { FieldValidator, InitialValidator } from "./FieldValidator.interface";

/**
 * @description
 * cheks if string is not empty
 * @param fieldValue raw field input string
 */
const isNotEmpty: InitialValidator = (validationErrorMsg: ValidationErrorMsg) => (fieldValue: string): ValidationResponse => ({
    isValid: !!fieldValue.trim(),
    validationErrorMsg
});
/**
 * @description
 * checks if string can be converted to positive number
 * @param fieldValue raw field input string
 */
const isPositive: InitialValidator = (validationErrorMsg: ValidationErrorMsg) => (fieldValue: string): ValidationResponse => ({
    isValid: +fieldValue > 0,
    validationErrorMsg
});
/**
 * @description
 * checks if string is a valid integer
 * @param fieldValue raw field input string
 */
const isInt: InitialValidator = (validationErrorMsg: ValidationErrorMsg) => (fieldValue: string): ValidationResponse => ({
    isValid: /^[0-9]\d*$/.test(fieldValue),
    validationErrorMsg
 });
/**
 * @description
 * checks if date is a valid date
 * @code alternative:
 * var t = new Date('2011-07-07T11:20:00.000+00:00x');
 * valid = !isNaN(t.valueOf());
 * @param fieldValue raw field input string
 */
const isDate: InitialValidator = (validationErrorMsg: ValidationErrorMsg) => (fieldValue: string): ValidationResponse => ({
   isValid: !isNaN(Date.parse(fieldValue)),
   validationErrorMsg
});

export {
    isNotEmpty,
    isPositive,
    isInt,
    isDate
};