// Define jsonButton from the DOM
const jsonButton = document.getElementById('json-btn');

// Event listener for click to start fetching
jsonButton.addEventListener('click', () => {

  // Fetch data from example.json
  fetch('data/example.json')

  // Validate response OK, otherwise throw error
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  })

  // Return response as JSON
  .then((response) => {
    return response.json();
  })

  // Log result to console
  .then((result) => {
    console.log(result);
  })

  // Catch errors and log them
  .catch((error) => {
    console.log('Looks like there was a problem:', error);
  });

});

