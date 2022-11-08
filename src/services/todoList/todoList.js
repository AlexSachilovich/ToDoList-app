import {DataBase} from '../database/Database'
export class classTodoList {
    constructor() {
        this.database = DataBase.getInstance()
    }

    createTask(body) {
       return this.database.create('tasks', body)
    }
}


