'use strict';
const { server } = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);


describe('web server', () => {

  it('should respond with a 500 on an error', () => {
    return mockRequest
      .get('/bad')
      .then(results => {
        expect(results.status).toBe(500);
      }).catch(console.error);
  });
});