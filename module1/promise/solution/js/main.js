const app = (() => {

  function getSchedule() {
    return new Promise((resolve, reject) => {
      fetch('http://api.tvmaze.com/schedule?country=BE&date=2019-02-07')

      .then((response) => {
        if (!response.ok) {
          throw Error('Bad response for schedule request!');
        }
        return response.json();
      })

      .then((result) => {
        appendSchedule(result);
        resolve(result);
      })

      .catch((errors) => {
        console.log(errors);
        reject();
      })
    });
  }

  function appendSchedule(shows) {
    const showContainer = document.getElementById('tv-show-container');
    showContainer.innerHTML = '';

    shows.forEach((data) => {
      showContainer.innerHTML = showContainer.innerHTML + `
        <div class="tv-show">
            <h2>${data.show.name} </h2>
            <h5>${data.airtime}</h5>
            <img src="${data.show.image.medium}" alt="" />
        </div>
      `;
    });
  }

  return {
    getSchedule: (getSchedule)
  };

})();