const app = (() => {

  function getTodos() {
    let cacheName = 'todo-cache-v1';
    let url = 'https://jsonplaceholder.typicode.com/todos';
    return new Promise((resolve, reject) => {
      fetch(url)

        .then(response => {
          if (!response.ok) {
            throw Error('Bad response for schedule request!')
          }
          return caches.open(cacheName).then(cache => {
              cache.put(url, response.clone());
              return response.json();
          })
        })

        .then(result => {
          resolve(result)
        })

        .catch(errors => {
          reject(errors)
        })
    });
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