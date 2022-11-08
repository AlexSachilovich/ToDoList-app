import './button.scss'

import { Component } from "../../core";

export class Button extends Component {
    constructor(){
        super()
        this.state = {
            count : 0
        }
    }
    render(){
        return `
            <button class = 'btnPlus'>+</button>
            <span>${this.state.count}</span>
            <button class = 'btnMinus'>-</button>
            `
    }


    plusCount() {
        this.setState((state) => {
            return {...state,
                count: state.count < 10 ? state.count +=1 : state.count
            }
        })
    }

    minusCount(evt) {
        return this.state = this.state -= 1
    }


    registerEvents(){
        this.addEventListener('click', this.plusCount())
    }
}


customElements.define('my-button', Button)