import { ValidationResponse } from './validation/ValidationResponse.interface';
import { FieldValidator } from "./validation/FieldValidator.interface";
import { isDate, isInt, isNotEmpty, isPositive } from "./validation/InputFieldValidators";
import { ValidationErrorMsg } from './validation/ValidationError';

const startApp = () => {
    $(() => {
        initialize();
        setupListeners();
    })
}

const initialize = () => {
    hideMessage();
}

const setupListeners = () => {

}

const validateNameInput = () => {
    const nameInputValidators = [isNotEmpty];
    const nameInputValue = $('#name-input').val();
    // var name = document.forms["input-form"]["name-input"].value;
}

const validateSiblingInput = () => {
    const siblingInputValidators = [isPositive, isInt];
    const siblingInputValue = $('#sibling-input').val();
}

const validateDate = () => {
    const dateValidators = [isDate];
    const dateValue = $('date-input').val();
}

const validate = (value: string, validators: FieldValidator[]): ValidationErrorMsg[] => {
    return validators.map((validator: FieldValidator) => {
        const response: ValidationResponse = validator(value);
        if (response.isValid) return;
        return response.validationErrorMsg;
    });
}


const hasErrors = (validationErrorsMsgs: ValidationErrorMsg[]) => validationErrorsMsgs.length === 0;



const hideMessage = () => {
    $('.greet-message').hide();
}

const performFormValidation = () => {
    return true;
}

const submitForm = () => {

}

const addValidationErrors = () => {

}

const handleFormSubmit = () => {
    $(document).on("submit", "form", (e) => {
        e.preventDefault();
        const formIsValid = performFormValidation();
        if (formIsValid) {
            submitForm();
            return;
        };
        addValidationErrors();
    });
}


const showMessageWhenLeaveNameInput = () => {
    $('#name-input').on("mouseleave", () => {
        $('.greet-message').show()
    })
}


startApp();