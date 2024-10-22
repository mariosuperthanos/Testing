const googleSearch = require('./script');

dbMock = [
  'dog.com',
  'cheesepuff.com',
  'disney.com',
  'dogpictures.com',
];

// Syncronous unit tests

// describe('the function with tests', ()=>{
  // it('this is a test', () => {
  //   console.log(googleSearch('.com',dbMock));
  // });

  // it('is a silly test', () => {
  //   expect('hello').toBe('hello');
  // });

  // it('is searching google', () => {
  //   expect(googleSearch('tt',dbMock)).toEqual([]);
  //   expect(googleSearch('dog',dbMock)).toEqual(['dog.com','dogpictures.com']);
  // });

//   it('work with undefined and null input', ()=>{
//     expect(googleSearch(undefined, dbMock)).toEqual([]);
//     expect(googleSearch(null, dbMock)).toEqual([]);
//   });

//   it('does not return more than 3 matches', ()=>{
//     expect(googleSearch('.com',dbMock).length).toEqual(3);
//   });
// });