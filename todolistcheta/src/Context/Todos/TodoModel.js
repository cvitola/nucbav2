import {v4 as uuidv4} from 'uuid';
//molde para el Todo.

export class Todo{
    constructor(label){
        this.id = uuidv4();
        this.label = label;
        this.complete = false;
        this.editMode = false;
    }
}