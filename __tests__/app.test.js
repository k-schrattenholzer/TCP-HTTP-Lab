const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('gets message from /', async() => {
    const response = await request(app).get('/');

    expect(response.text).toEqual('helloo');
  });
});
//dummy test passing
