import { isDate, isInt, isNotEmpty, isPositive } from "./validation/InputFieldValidators";
var startApp = function () {
    $(function () {
        initialize();
        setupListeners();
    });
};
var initialize = function () {
    hideMessage();
};
var setupListeners = function () {
};
var validateNameInput = function () {
    var nameInputValidators = [isNotEmpty];
    var nameInputValue = $('#name-input').val();
    // var name = document.forms["input-form"]["name-input"].value;
};
var validateSiblingInput = function () {
    var siblingInputValidators = [isPositive, isInt];
    var siblingInputValue = $('#sibling-input').val();
};
var validateDate = function () {
    var dateValidators = [isDate];
    var dateValue = $('date-input').val();
};
var validate = function (value, validators) {
    return validators.map(function (validator) {
        var response = validator(value);
        if (response.isValid)
            return;
        return response.validationErrorMsg;
    });
};
var hasErrors = function (validationErrorsMsgs) { return validationErrorsMsgs.length === 0; };
var hideMessage = function () {
    $('.greet-message').hide();
};
var performFormValidation = function () {
    return true;
};
var submitForm = function () {
};
var addValidationErrors = function () {
};
var handleFormSubmit = function () {
    $(document).on("submit", "form", function (e) {
        e.preventDefault();
        var formIsValid = performFormValidation();
        if (formIsValid) {
            submitForm();
            return;
        }
        ;
        addValidationErrors();
    });
};
var showMessageWhenLeaveNameInput = function () {
    $('#name-input').on("mouseleave", function () {
        $('.greet-message').show();
    });
};
startApp();
//# sourceMappingURL=index.js.map