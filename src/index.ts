import { ERROR_VALIDATION_EMPTY_FIELD, ERROR_VALIDATION_NOT_DATE_FIELD, ERROR_VALIDATION_NOT_POSITIVE_FIELD } from './validation/Errors.const.js';
import { isDate, isInt, isNotEmpty, isPositive } from './validation/InputFieldValidators.js';
import { FieldValidator, ValidationErrorMsg, ValidationResponse } from "./validation/Validation.types.js";

const nameInput:string = '#name-input';
const siblingInput: string = '#sibling-input';
const dateInput: string = '#date-input';
const greetMessage: string = '.greet-message';
const resultMessage: string = '.result-message';

(function startApp() {
    $(async () => {
        await initialize();
        setupListeners();
    })
})()

const initialize = async () => {
    await loadData('https://jsonplaceholder.typicode.com/users');
    hideMessage();
}

const hideMessage = () => $(greetMessage).hide();
const showMessage = () => $(greetMessage).show();
const showMessageWhenLeaveNameInput = () => $(nameInput).on('mouseenter', () => showMessage());
const replaceGreatWhenEnterDate = () => $(dateInput).on('mouseenter', () => $(resultMessage).text('Wonderful!'))
const deleteResultMessageOnSiblingsEnter = () => $(siblingInput).on('mouseenter', () => $(resultMessage).detach())
const changeGreetColorOnButtonEnter = () => $('button').on('mouseenter', () => $(greetMessage).css('color', 'green'))
const appendMessageWhenLeaveNameInput = () => $(nameInput).on('mouseleave', () => $(greetMessage).append(getTextContent(nameInput)));
const getTextContent = (selector: string) => $(selector).val() as string;

const loadData = async (api: string) => { 
    const resp = await fetch(api);
    const json = await resp.json();
    console.log(json)
}
const submitForm = () => {

}

const setupListeners = () => {
    const fieldValidators: Map<string, FieldValidator[]> = setupFieldValidators();
    handleFormSubmit(fieldValidators);
    showMessageWhenLeaveNameInput();
    appendMessageWhenLeaveNameInput();
    replaceGreatWhenEnterDate();
    changeGreetColorOnButtonEnter();
    deleteResultMessageOnSiblingsEnter();
}
const setupFieldValidators = () => {
    const validators = new Map<string, FieldValidator[]>();
    validators.set(nameInput, [isNotEmpty(ERROR_VALIDATION_EMPTY_FIELD)]);
    validators.set(siblingInput, [isPositive(ERROR_VALIDATION_NOT_POSITIVE_FIELD), isInt(ERROR_VALIDATION_NOT_DATE_FIELD)]);
    validators.set(dateInput, [isDate(ERROR_VALIDATION_NOT_DATE_FIELD)]);
    return validators;
}
const validateField = (value: string, validators: FieldValidator[]): ValidationErrorMsg[] => {
    return validators.map((validator: FieldValidator) => {
        const response: ValidationResponse = validator(value);
        if (response.isValid) return;
        return response.validationErrorMsg;
    });
}
const hasFormErrors = (validationErrorsMsgs: ValidationErrorMsg[]) => validationErrorsMsgs.length !== 0;
const validateForm = (validators: Map<string, FieldValidator[]>) => {
    const errorList: boolean[] = [...validators.keys()].map(inputSelector => {
        const fieldInputValue = $(inputSelector).val().toString();
        const validationMessages: ValidationErrorMsg[] = validateField(fieldInputValue, validators.get(inputSelector))
        if (hasFormErrors(validationMessages)) addValidationErrors(inputSelector, validationMessages);
        return hasFormErrors(validationMessages)
    })
    const formHasErrors = errorList.some(el => el === true);
    return formHasErrors;
}
const htmlElement = (tag: string, content: string, ...classes) => `<${tag} class=${classes.join(' ')}>${content}</${tag}>`
const errorMsg = (message: string) => htmlElement('div', message, 'error')
const addValidationErrors = (selector: string, errors: ValidationErrorMsg[]): void => errors.forEach(err => $(selector).after(errorMsg(err)));
const handleFormSubmit = (validators: Map<string, FieldValidator[]>) => {
    $(document).on("submit", "form", (event) => {
        event.preventDefault();
        const formHasErrors = validateForm(validators);
        // alert(getTextContent(nameInput))
        alert($('#name-input').val() as string)
        if (formHasErrors) return;
        submitForm();
    });
}

