import { Component } from "./core";
import "./components/molecules/InputGroup/InputGroup";
import { todoList } from "./services/todoList/TodoList";
import { Task } from "./components/molecules/Task/Task";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      isLoading: false
    };
  }


  getTasks() {
    todoList.getTasks().then((data) => {
      this.setState((state) => {
        return {
          ...state,
          tasks: data
        };
      });
    });
  }

  onClick = (evt) => {
    const target = evt.target
    if (target.closest('.delete-action')) {
      const data = target.dataset
      this.deleteTask(data.id)
    }
  }


  saveTask = (evt) => {
    todoList.createTask({ ...evt.detail, isComplited: false })
      .then(() => {
        this.getTasks()
      })
  }


  deleteTask = (id) => {
    todoList.deleteTask(id).then(() => {
      this.getTasks()
    })
  }


  componentDidMount() {
    this.getTasks()
    this.addEventListener('save-task', this.saveTask)
    this.addEventListener('click', this.onClick)
  }

  componentWillUnmount() {
    this.removeEventListener('save-task', this.saveTask)
    this.removeEventListener('click', this.onClick)
  }

  render() {
    return `
        <div class='container mt-5'>
          <my-input-group></my-input-group>
          <ul class="list-group">
            ${this.state.tasks.map((item) => (`<my-task 
            id="${item.id}"
            title="${item.title}"
            iscompleted="${item.isCompleted}"
            ><>
            `)).join(' ')}
          </ul>
        </div>
        `;
  }
}

customElements.define("my-app", App);

{
  /* <ul class="list-group">
  <li class="list-group-item">
    <div class="form-check d-flex justify-content-between align-items-center">
      <div>
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
          <label class="form-check-label" for="flexCheckDefault">
            Default checkbox
          </label>
        </div>
        <div class='d-flex'>
          <my-button content="Delete" classname="btn btn-danger btn-sm"></my-button>
          <my-button content="Update" classname="btn btn-sm btn-primary"></my-button>
        </div>
    </div>
  </li>
</ul> */
}
