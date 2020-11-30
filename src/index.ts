$(() => {
    const greetMessage = $('greet-message').
})

$(document).on("submit", "form", (e) => {
    e.preventDefault();
    return false;
});

$('name-input').on("mouseleave", (e) => {
    console.log(e.data);
})