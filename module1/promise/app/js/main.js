const app = (() => {

  function getTodos() {
    // TODO 1: Return a promise
    // Don't forget to resolve (success) and reject (failure)
    fetch('https://jsonplaceholder.typicode.com/todos')

      .then(response => {
        if (!response.ok) {
          throw Error('Bad response for schedule request!')
        }
        return response.json()
      })

      .then(result => {
        // TODO: Resolve here
      })

      .catch(errors => {
        // TODO: Reject here
      })
  }

  function showTodos(todos) {
    const showContainer = document.getElementById('todo-container');
    let html = '';
    showContainer.innerHTML = '';

    todos.forEach(data => {
      let checked = data.completed ? '<i class="far fa-check-square"></i>' : '<i class="far fa-square"></i>';

      html += `
        <div class="todo">
          ${checked}
          <span>${data.title}</span>
        </div>
      `
    })

    showContainer.innerHTML = html
  }

  return {
    getTodos: (getTodos),
    showTodos: (showTodos)
  }

})()