import inputFieldsView from "./views/InputFieldsView";
import ListItemInterface from "./views/GeneralView";
import state from "./model";
import ListView from "./views/ListView";

const submitButton = document.querySelector('.button-container button')! as HTMLButtonElement;

const init = function () {
    submitButton.addEventListener('click', buttonHandlerFunction);
}

const buttonHandlerFunction = function (event: MouseEvent) {
    event.preventDefault();
    if (inputFieldsView.submitHandler()) {
        ListView.renderContent();
    }
}

init();
