$(function () {
    var greetMessage = $('greet-message');
    greetMessage.attr('display') = 'false';
});
$(document).on("submit", "form", function (e) {
    e.preventDefault();
    return false;
});
$('name-input').on("mouseleave", function (e) {
    console.log(e.data);
});
//# sourceMappingURL=index.js.map