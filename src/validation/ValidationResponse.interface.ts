import { ValidationErrorMsg } from './ValidationError';

export interface ValidationResponse {
    isValid: boolean;
    validationErrorMsg?: ValidationErrorMsg;
}