import { Component } from "../../../core";
import {todoList} from '../../../services/todoList/todoList'
import '../../atoms/Button/Button'
import '../../atoms/Input/Input'





export class InputGroup extends Component { 

    constructor() {
        super()
        this.state = {
            inputValue: ""
        }
    }


    onSave() {
        if(this.state.inputValue) {
                todoList.createTask
        }
    }
    onInput(evt){
        this.setState((state) => {
            return {
                ...state,
                inputValue: evt.detail.value
            }
        })
    }

    componentDidMount() {
        this.addEventListener('save-task', this.onSave)
        this.addEventListener('custom-input', this.onInput)
    }



    render(){
        return `
        <div class="input-group mb-3">
            <my-input value="${this.state.inputValue}" placeholder="Add a new task" type="text"></my-input>
            <button class="btn btn-outline-primary" type="button" id="button-addon2">save</button>
        </div>
        `
    }
}

customElements.define('my-input-group', InputGroup)