class DisplayToday {
    constructor(element) {
      this.element = document.querySelector(element);
      this.date = new Date();
      this.options = { day: "numeric", month: "numeric" };
    }
  
    updateElement() {
      this.element.innerText = new Intl.DateTimeFormat(
        "pt-br",
        this.options,
      ).format(this.date);
    }
  
    init() {
      if (this.element) this.updateElement();
      return this;
    }
}

const displayToday = new DisplayToday(".today");
displayToday.init();

function addTask() {
    let todoList = document.querySelector("ul");

    if (!todoList) {
        todoList = document.createElement("ul");
        document.body.appendChild(todoList); 
        todoList.children.length +1
    }

    let novaTodoList = document.createElement("ul");

    novaTodoList.innerHTML = `
        <ul class="todo-list">
             <li class="task">
                <input type="checkbox">
                <textarea name="" id="" cols="100" rows="2"></textarea>
                <button class="delete-button" onclick="deleteTask()"><i class="bi bi-trash3-fill"></i></button>
             </li>
        </ul>
    `;

    // Adicionar o novo li à lista
    todoList.appendChild(novaTodoList);
}


function deleteTask() {
    let todoList = document.querySelector("ul");
    if (todoList.children.length > 0) {
        todoList.removeChild(todoList.lastChild);
    }
}
