const { default: expect } = require('expect');
const swapi = require('./script2');


// Asyncronous unit tests

// it('calls swapi to get people', ()=>{
  // expect.assertions(number) verifies that a
  // certain number of assertions are called during a
  // test. This is often useful when testing asynchronous
  // code, in order to make sure that assertions in a
  // callback actually got called.
//   expect.assertions(1);
//   // This tells Jest to wait for the promise to resolve (or reject) before determining if the test passed or failed
//   return swapi.getPeople(fetch).then(data =>{
//     expect(data.mass).toEqual('77');
//   });
// });

// it('calls swapi to get people ', ()=>{
//   swapi.getPeople(fetch).then(data =>{
//     // console.log(data.mass);
//     expect(data.mass).toEqual('77');
//   });
// });

// it('calls swapi to get people with a promise', ()=>{
//   expect.assertions(2);
//   return swapi.getPeoplePromise(fetch).then(data =>{
//     // console.log(data.mass);
//     expect(data.mass).toEqual('77');
//     expect(data.films.length).toBeGreaterThan(3);
//   });
// });

// Use jest cheat sheet




// Mocks



it('getPeople returns mass and films', ()=>{
  // jest.fn().mockReturnValue is the syntax of the mock function
  // mockFetch simulates the behavior of the fetch function used within getPeoplePromise.
  // Promise.resolve({...}) -> simulated API response
  // json: () => Promise.resolve -> the method that converts the raw response into JSON format
  // NOTE!: This function does not simulate a real response from the API but instead provides a fake response with fake data: {
    //   mass:77,
    //   films: [0,1,2,3,4,5]
    // })
  const mockFetch = jest.fn().mockReturnValue(Promise.resolve({
    json: () => Promise.resolve({
      mass:77,
      films: [0,1,2,3,4,5]
    })
  }))

  expect.assertions(4);

  return swapi.getPeoplePromise(mockFetch).then(data =>{
    expect(mockFetch.mock.calls.length).toBe(1);
    expect(mockFetch).toBeCalledWith('https://swapi.dev/api/people/1/');
    expect(data.mass).toEqual(77);
    expect(data.films.length).toBeGreaterThan(3);
  });
});


// Mock functions are also known as "spies", because
// they let you spy on the behavior of a function that is
// called indirectly by some other code, rather than just
// testing the output. You can create a mock function with
// jest.fn(). If no implementation is given, the mock
// function will return undefined when invoked.
