export interface FieldValidator {
    (fieldValue: string): boolean;
}