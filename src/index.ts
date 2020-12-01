import { Post } from './http/Post.interface.js';
import { Person } from './http/Person.interface.js';
import { HttpService } from './http/Http.service.js';
import { ERROR_VALIDATION_EMPTY_FIELD, ERROR_VALIDATION_NOT_DATE_FIELD, ERROR_VALIDATION_NOT_POSITIVE_FIELD } from './validation/Errors.const.js';
import { isDate, isInt, isNotEmpty, isPositive } from './validation/InputFieldValidators.js';
import { FieldValidator, ValidationErrorMsg, ValidationResponse } from "./validation/Validation.types.js";

const nameInput: string = '#name-input';
const siblingInput: string = '#sibling-input';
const dateInput: string = '#date-input';
const greetMessage: string = '.greet-message';
const resultMessage: string = '.result-message';

const httpService = new HttpService<Post, Person>();

(function startApp() {
    $(async () => {
        await initialize();
        setupListeners();
    })
})()

const initialize = async () => {
    const people: Person[] = await loadPersonData();
    addPeopleToDom(people);
    hideMessage();
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

const postToPosts = async (): Promise<number> => {
    const post: Post = {userId: 1, title: 'hello', body: 'world'};
    return await httpService.post('https://jsonplaceholder.typicode.com/users', post);
}
const addPeopleToDom = (people: Person[]) => people.map(person => $('.people-list').after(htmlElement('li', person.name)));
const loadPersonData = async () => await httpService.get('https://jsonplaceholder.typicode.com/users');

const hideMessage = () => $(greetMessage).hide();
const showMessage = () => $(greetMessage).show();
const showMessageWhenLeaveNameInput = () => $(nameInput).on('mouseenter', () => showMessage());
const replaceGreatWhenEnterDate = () => $(dateInput).on('mouseenter', () => $(resultMessage).text('Wonderful!'));
const deleteResultMessageOnSiblingsEnter = () => $(siblingInput).on('mouseenter', () => $(resultMessage).detach());
const changeGreetColorOnButtonEnter = () => $('button').on('mouseenter', () => $(greetMessage).css('color', 'green'));
const appendMessageWhenLeaveNameInput = () => $(nameInput).on('mouseleave', () => $(greetMessage).append(getTextContent(nameInput)));
const getTextContent = (selector: string) => $(selector).val() as string;

const validateField = (value: string, validators: FieldValidator[]): ValidationErrorMsg[] => {
    const validationErrorMessages = validators
        .map((validator: FieldValidator) => {
            const response: ValidationResponse = validator(value);
            if (response.isValid) return '';
            return response.validationErrorMsg;
        })
        .filter(el => el !== '');
    return validationErrorMessages;
}
const submitForm = (statusCode: number) => alert(statusCode);
const hasFormErrors = (validationErrorsMsgs: ValidationErrorMsg[]) => validationErrorsMsgs.length !== 0;
const validateForm = (validators: Map<string, FieldValidator[]>) => {
    const errorList: boolean[] = [...validators.keys()].map(inputSelector => {
        const fieldInputValue = $(inputSelector).val().toString();
        const validationMessages: ValidationErrorMsg[] = validateField(fieldInputValue, validators.get(inputSelector))
        if (hasFormErrors(validationMessages)) addValidationErrors(inputSelector, validationMessages);
        return hasFormErrors(validationMessages)
    })
    alert(`errors = ${errorList}`)
    const formHasErrors = errorList.some(el => el === true);
    return formHasErrors;
}
const clearForm = (keys: string[]) => keys.map(key => $(key).val('')) 
const htmlElement = (tag: string, content: string, ...classes) => `<${tag} class=${classes.join(' ')}>${content}</${tag}>`
const errorMsg = (message: string) => htmlElement('div', message, 'error')
const addValidationErrors = (selector: string, errors: ValidationErrorMsg[]): void => errors.forEach(err => $(selector).after(errorMsg(err)));
const handleFormSubmit = (validators: Map<string, FieldValidator[]>) => {
    $(document).on("submit", "form", async (event) => {
        event.preventDefault();
        const formHasErrors = validateForm(validators);
        clearForm([...validators.keys()])
        if (formHasErrors) return;
        const statusCode = await postToPosts();
        submitForm(statusCode);
    });
}
