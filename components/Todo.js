class Todo {
  constructor(data, selector) {
    this._data = data;
    this._selector = selector;
  }

  _getTemplate() {
    const todoElement = document
      .querySelector(this._selector)
      .content.querySelector(".todo")
      .cloneNode(true);

    return todoElement;
  }

  _setEventListeners() {
    const todoDeleteBtn = this._element.querySelector(".todo__delete-btn");

    todoDeleteBtn.addEventListener("click", () => {
      this._element.remove();
      this._element = null;
    });

    this._todoCheckboxEl.addEventListener("change", () => {
      this._data.completed = !this._data.completed;
    });
  }

  _generateCheckboxElement() {
    this._todoCheckboxEl = this._element.querySelector(".todo__completed");
    this._todoLabel = this._element.querySelector(".todo__label");

    this._todoCheckboxEl.checked = this._data.completed;
    this._todoCheckboxEl.id = `todo-${this._data.id}`;
    this._todoLabel.setAttribute("for", `todo-${this._data.id}`);
  }

  _generateDueDate() {
    const todoDate = this._element.querySelector(".todo__date");
    const dueDate = new Date(this._data.date);

    if (!isNaN(dueDate)) {
      todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })}`;
    }
  }

  getView() {
    this._element = this._getTemplate();
    const todoNameEl = this._element.querySelector(".todo__name");

    todoNameEl.textContent = this._data.name;

    this._generateDueDate();
    this._generateCheckboxElement();
    this._setEventListeners();

    return this._element;
  }
}

export default Todo;
