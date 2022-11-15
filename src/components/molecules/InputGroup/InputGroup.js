import { Component } from "../../../core";
import '../../atoms/Button/Button'
import '../../atoms/Input/Input'




export class InputGroup extends Component {
    render(){
        return `
        <div class="input-group mb-3">
            <my-input placeholder="Add a new task" type="text"></my-input>
            <button class="btn btn-outline-primary" type="button" id="button-addon2">save</button>
        </div>
        `
    }
}

customElements.define('my-input-group', InputGroup)