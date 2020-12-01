export type ValidationErrorMsg = string;

export interface ValidationResponse {
    isValid: boolean;
    validationErrorMsg?: ValidationErrorMsg;
}

export interface FieldValidator {
    (fieldValue: string): ValidationResponse
}

export interface InitialValidator {
    (validationErrorMsg: ValidationErrorMsg): FieldValidator
}

export interface FormValidationStatus {
    isValid: boolean;
    selector: string;
    errorMessages: ValidationErrorMsg[];
}
