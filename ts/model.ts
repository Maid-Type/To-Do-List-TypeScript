import {PriorityLevel} from "./helpers";
import ListItem from "./views/GeneralView";

interface ModelInterface {
    isEmpty:boolean,
    size:ListItem[],
}

const state:ModelInterface = {
    size:[],
    get isEmpty() {
        return this.size.length === 0;
    }
}

export default state;