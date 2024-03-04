import {PriorityLevel} from "../helpers";
import ListItem from "./GeneralView";
import state from "../model";

class InputFields {
    parentElement = document.querySelector('.form-container')! as HTMLFormElement;
    taskNameElement = document.querySelector('#task-name')! as HTMLInputElement;
    taskTimeElement = document.querySelector('#task-time')! as HTMLInputElement;
    taskPriorityElement = document.querySelector('#priority')! as HTMLInputElement;

    submitHandler():boolean {

        const taskName: string = this.taskNameElement.value;
        const taskTime: Date = new Date(this.taskTimeElement.value);
        const taskPriority = this.taskPriorityElement.value as PriorityLevel;

        if (this.validate(taskName, taskTime, taskPriority)) {
            state.size.push(new ListItem(taskName, taskTime, taskPriority, Math.floor(Math.random() * 90000) + 10000));
            this.clearInput();
            console.log(state);
            console.log(typeof state.size[0]);
            return true;
        }
        else {
            alert('Wrong input!');
            return false;
        }
    }

    clearInput(){
        this.taskNameElement.value = '';
        this.taskTimeElement.value = '';
        this.taskPriorityElement.value = '';
    }

    validate(taskName:string,taskTime:Date,taskPriority:PriorityLevel):boolean{
        return taskName.trim().length >= 5 && !isNaN(taskTime.getTime()) && (taskPriority === 'low priority' || taskPriority === 'medium priority' || taskPriority === 'top priority');
    }

}

export default new InputFields();