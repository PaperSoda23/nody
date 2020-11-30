import { FieldValidator } from "./FieldValidator.interface";

/**
 * @description
 * cheks if string is not empty
 * @param fieldValue raw field input string
 */
const isNotEmpty: FieldValidator = (fieldValue: string):boolean => !!fieldValue.trim();
/**
 * @description
 * checks if string can be converted to positive number
 * @param fieldValue raw field input string
 */
const isPositive: FieldValidator = (fieldValue: string):boolean => +fieldValue > 0;
/**
 * @description
 * checks if string is a valid integer
 * @param fieldValue raw field input string
 */
const isInt: FieldValidator = (fieldValue: string): boolean => /^[0-9]\d*$/.test(fieldValue);
/**
 * @description
 * checks if date is a valid date
 * @code alternative:
 * var t = new Date('2011-07-07T11:20:00.000+00:00x');
 * valid = !isNaN(t.valueOf());
 * @param fieldValue raw field input string
 */
const isDate: FieldValidator = (fieldValue: string): boolean => !isNaN(Date.parse(fieldValue))

export {
    isNotEmpty,
    isPositive,
    isInt,
    isDate
};