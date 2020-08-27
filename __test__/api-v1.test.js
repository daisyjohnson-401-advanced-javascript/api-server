'use strict';

const { server } = require('../lib/server.js');
const supergoose = require('@code-fellows/supergoose');
const productModel = require('../lib/routes/api-v1.js');

const mockRequest = supergoose(server);

// beforeEach(async () => {
//   await productModel.schema.deleteMany({});
// });

describe('Products API', () => {

  it('gets empty when empty', async () => {

    const products = await mockRequest.get('/api/v1/products');

    expect(products.statusCode).toBe(200);

    expect(products.body.count).toBe(0);

    expect(products.body.results.length).toBe(0);
  });


  it('can post() a new product', async () => {
    const forkData = { name: 'fork', display_name: 'Fork', category: 'silverware', description:'pointy guy'};

    const response = await mockRequest.post('/api/v1/products').send(forkData);

    expect(response.status).toBe(200);

    verifyProps(forkData, response.body);
  });

  it('can get() a product', async () => {

    const forkData = { name: 'fork', display_name: 'Fork', category: 'silverware',description:'pointy guy'};

    const { body: createdFork } = await mockRequest.post('/api/v1/products').send(forkData);

    const { body: fetchedFork } = await mockRequest.get('/api/v1/products/' + createdFork._id);

    verifyProps(createdFork, fetchedFork);
  });

  it('can get() all products', async () => {

    const forkData = { name: 'fork', display_name: 'Fork', category: 'silverware'};

    await mockRequest.post('/api/v1/products').send(forkData);

    const spoonData = { name: 'spoon', display_name: 'Spoon', category: 'silverware'};

    await mockRequest.post('/api/v1/products').send(spoonData);

    const response = await mockRequest.get('/api/v1/products');

    expect(response.body.count).toBe(2);

    expect(response.body.results.length).toBe(2);

  });



  it('can update (PUT) a product', async () => {

    const forkData = { name: 'fork', display_name: 'Fork', category: 'silverware'};

    const { body: createdFork } = await mockRequest.post('/api/v1/products').send(forkData);

    forkData.category = 'cutlery';
    console.log('FORK DATA', forkData);
    const { body: putFork } = await mockRequest.put('/api/v1/products/' + createdFork._id).send(forkData);

    verifyProps(forkData, putFork);
  });

  it('can update (PATCH) a product', async () => {

    const forkData = { name: 'fork', display_name: 'Fork', category: 'silverware' };

    const { body: createdFork } = await mockRequest.post('/api/v1/products').send(forkData);

    forkData.category = 'cutlery';

    const { body: patchedFork } = await mockRequest.patch('/api/v1/products/' + createdFork._id).send(forkData);

    verifyProps(forkData, patchedFork);
  });

  it('can delete a product', async () => {

    const forkData = { name: 'fork', display_name: 'Fork', category: 'silverware',description:'pointy guy'};

    const { body: createdFork } = await mockRequest.post('/api/v1/products').send(forkData);

    const { body: deletedFork } = await mockRequest.delete('/api/v1/products/' + createdFork._id);

    verifyProps(deletedFork, createdFork);

  });
});

function verifyProps(a, b) {
  for (let key in a) {

    const valueA = a[key];

    const valueB = b[key];

    expect(valueA).toBe(valueB);
  }
}