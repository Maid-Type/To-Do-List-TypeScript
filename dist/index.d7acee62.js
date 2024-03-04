alert("Hello World!");
const submitButton = document.querySelector(".button-container button");
const init = function(submitHandler) {
    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        submitHandler();
    });
};
init();

//# sourceMappingURL=index.d7acee62.js.map
