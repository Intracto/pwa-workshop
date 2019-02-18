const app = (() => {

  function getTodos() {
    // TODO 1: Return a Promise for the fetch
    // Resolve a success and reject failure
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => {
        if (!response.ok) {
          throw Error('Bad response for schedule request!')
        }
        return response.json()
      })
      .then(result => {
        appendTodos(result)
      })
      .catch(errors => {
        console.log(errors)
      })
  }

  function appendTodos(shows) {
    const showContainer = document.getElementById('todo-container');
    showContainer.innerHTML = '';

    shows.forEach(data => {
      let checked = data.completed ? '<i class="far fa-check-square"></i>' : '<i class="far fa-square"></i>';

      showContainer.innerHTML = showContainer.innerHTML + `
        <div class="todo">
          ${checked}
          <span>${data.title}</span>
        </div>
      `
    })
  }

  return {
    getTodos: (getTodos)
  }

})()