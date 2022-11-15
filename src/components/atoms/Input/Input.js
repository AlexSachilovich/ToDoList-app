import { Component } from "../../../core"
import { debounce } from "../../../utils/debounce"
export class Input extends Component {
    constructor(){
        super()
        this.state = {
             value: ""
        }
        this.onInput = this.onInput.bind(this)
    }


    componentDidMount (){
        this.addEventListener('input', debounce(this.onInput, 300))
    }

    componentWillUpdate(name, oldValue, newValue) {
        if (name === 'value') {
            this.setState((state) => {
                return {
                    ...state,
                    value: newValue
                }
            })
        }
    }

    static get observedAttributes(){
        return['type', 'placeholder', 'value']
    }


    onInput(evt) {
        this.dispatch('custom-input', {value: evt.target.value})
    }


    render() {
        return `
            <input 
                type="${this.props.type}" 
                class="form-control" 
                placeholder="${this.props.placeholder}"
                value="${this.state.value}"
            />
            `
    }
}
customElements.define('my-input', Input)