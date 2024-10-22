//Using a fetch parameter allows for easy testing. For example, in unit tests, you can provide a mocked version of the fetch function to control its behavior.

const getPeoplePromise = fetch => {
  return fetch('https://swapi.dev/api/people/1/').then(response =>response.json()).then(data =>{
    // console.log(data);
    return {
      mass: data.mass,
      films: data.films,
    };
  });
}

const getPeople = async (fetch) => {
  const getRequest= await fetch('https://swapi.dev/api/people/1/');
  const data = await getRequest.json();
  // console.log(data);
  return {
    mass: data.mass,
    films: data.films,
  };
}

module.exports = {
  getPeople,
  getPeoplePromise
}