const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {

  it('gets message from /', async() => {
    const response = await request(app).get('/');

    expect(response.text).toEqual('helloo');
  });

  it('gets echo of response body from /echo', async() => {
    const response = await request(app)
      .post('/echo')
      .send('helloo');

    expect(response.text).toEqual('helloo');
  });

  it('gets color /red', async() => {
    const response = await request(app).get('/red');

    expect(response.text).toContain('rojo');
  });

////....////new tests above this line////....////
});

