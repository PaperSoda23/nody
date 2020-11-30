import { ValidationErrorMsg } from "./ValidationError";
import { ValidationResponse } from "./ValidationResponse.interface";

export interface FieldValidator {
    (fieldValue: string): ValidationResponse
}

export interface InitialValidator {
    (validationErrorMsg: ValidationErrorMsg): FieldValidator
}