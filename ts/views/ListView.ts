import state from "../model";

class ListView {
    parentElement: HTMLUListElement;
    activeElementString?: string;

    constructor() {
        this.parentElement = document.querySelector('.unordered-list')!;
        this.addListener();

    }

    renderContent(): void {
        this.generateItem();
        this.parentElement.insertAdjacentHTML('beforeend', this.activeElementString!);
    }

    generateItem(): void {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const lastItem = state.size[state.size.length - 1];
        const dayOfWeekIndex = lastItem.date.getDay();
        const dayOfWeek = weekdays[dayOfWeekIndex];

        this.activeElementString = `
            <li class="list-item" id="${lastItem.id}">
                <input type="checkbox">
                <p class="main-text">${lastItem.name}</p>
                <p>
                    ${lastItem.date.getHours().toString().padStart(2, '0')} Hours,
                    ${lastItem.date.getMinutes().toString().padStart(2, '0')} Minutes,
                    ${dayOfWeek}
                </p>
                <p>${lastItem.priority}</p>
            </li>
        `;
    }

    addListener(): void {
        this.parentElement.addEventListener('click',this.handlerFunction);
    }

    handlerFunction(event: MouseEvent){
        if ((event.target as HTMLElement).tagName.toLowerCase() === 'input' && (event.target as HTMLInputElement).type === 'checkbox') {
            const listItem = (event.target as HTMLElement).closest('li');

            if (listItem) {
                const clickedItemId = listItem.id;
                state.size = state.size.filter(obj => obj.id.toString() !== clickedItemId);

                setTimeout(() => {
                    listItem.remove();
                }, 500);

                console.log(state);
            }
        }
    }
}

export default new ListView();
