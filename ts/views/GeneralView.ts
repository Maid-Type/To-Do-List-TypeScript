import { PriorityLevel } from "../helpers";

interface ListItemInterface {
    name: string;
    date: Date;
    priority: PriorityLevel;
    id:number;
}

class ListItem implements ListItemInterface {
    name: string;
    date: Date;
    priority: PriorityLevel;
    id:number;

    constructor(name: string, date: Date, priority: PriorityLevel,id:number) {
        this.name = name;
        this.date = date;
        this.priority = priority;
        this.id = id;
    }
}

export default ListItem

