var validationErrors = [];

// $("button").click(function () {
//   console.log("clicked on p");
//   $(this).hide();
// });

$("document");

function validateForm() {
  validateNameInput();
}

function validateNameInput() {
  var name = document.forms["input-form"]["name-input"].value;
  return !!name.trim();
}

/***
 * prevents default form submit when submit button is clicked
 */
$(document).on("submit", "form", function (e) {
  e.preventDefault();
  return false;
});

const isEmpty = (str) => !str.trim().length;
