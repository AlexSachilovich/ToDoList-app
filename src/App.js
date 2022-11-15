import {Component} from './core'
import './components/molecules/InputGroup/InputGroup'



export class App extends Component {

  render(){
      return `
        <div class="container mt-5">
          <my-input-group></my-input-group>
        </div>
        `
    }
}

customElements.define('my-app', App)