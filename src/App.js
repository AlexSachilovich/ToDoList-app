import {Component} from './core'
import './components/atoms/Button/Button'
import './components/atoms/Input/Input'


export class App extends Component {

    render(){
        return `
        <div class='container mt-5'>
          <div class="input-group mb-3">
            <my-input placeholder="Add a new task" type="text"></my-input>
            <button class="btn btn-outline-primary" type="button" id="button-addon2">save</button>
          </div>





        <ul class="list-group">
          <li class="list-group-item">
            <div class="form-check d-flex justify-content-between align-items-center">
              <div>
                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                  <label class="form-check-label" for="flexCheckDefault">
                    Default checkbox
                  </label>
                </div>
                <div class='d-flex'>
                  <button type="button" class="btn btn-danger btn-sm">Delete</button>
                  <button type="button" class="btn btn-primary btn-sm">Update</button>
                </div>
            </div>
          </li>
        </ul>
      </div>
        `
    }
}

customElements.define('my-app', App)