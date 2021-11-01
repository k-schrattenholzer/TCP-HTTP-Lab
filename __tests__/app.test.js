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

  it('gets color /green', async() => {
    const response = await request(app).get('/green');

    expect(response.text).toContain('verde');
  });

  it('gets color /blue', async() => {
    const response = await request(app).get('/blue');

    expect(response.text).toContain('azure');
  });

////....////new tests above this line////....////
});

