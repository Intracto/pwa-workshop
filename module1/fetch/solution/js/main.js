// Define jsonButton from the DOM
const jsonButton = document.getElementById('json-btn')
const htmlMessage = document.getElementById('message')

// Event listener for click to start fetching
jsonButton.addEventListener('click', () => {

  // Fetch data from https://jsonplaceholder.typicode.com/todos
  fetch('https://jsonplaceholder.typicode.com/todos')

    // Validate response OK, otherwise throw error
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText)
      }
      return response
    })

    // Return response as JSON, this will be chained
    .then(response => {
      return response.json()
    })

    // Log result to console, the result output is chained from the previous one
    .then(result => {
      console.log(result)
      htmlMessage.innerHTML = 'Data fetched, check JavaScript Console.'
    })

    // Catch errors and log them
    .catch(error => {
      console.log('Looks like there was a problem:', error)
    });

});

