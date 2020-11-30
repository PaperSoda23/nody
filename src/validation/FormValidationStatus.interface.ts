import { ValidationErrorMsg } from './ValidationError';

export interface FormValidationStatus {
    isValid: boolean;
    selector: string;
    errorMessages: ValidationErrorMsg[];
}