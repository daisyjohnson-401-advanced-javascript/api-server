'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

describe.skip('Food API', () => {
  it('can post() a new food', () => {
    let obj = { name: 'apples', calories: 100, type: 'FRUIT' };
    return mockRequest.post('/api/v1/food')
      .send(obj)
      .then(data => {
        let record = data.body;
        Object.keys(obj).forEach(key => {
          expect(record[key.name]).toEqual(obj[key.name]);
        });
      });
  });

  it('can get() a food', () => {
    let obj = { name: 'oranges', calories: 100, type: 'FRUIT' };
    return mockRequest.post('/api/v1/food')
      .send(obj)
      .then(data => {
        return mockRequest.get(`/api/v1/food`)
          .then(record => {
            Object.keys(obj).forEach(key => {
              expect(record.body[1][key.name]).toEqual(obj[key.name]);
            });
          });
      });
  });

  // it('can delete() a food', () => {
  //   let obj = {name:'oranges', calories:100,  type:'FRUIT'};
  //   return mockRequest.delete
  // })

});
