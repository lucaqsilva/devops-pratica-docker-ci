const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('deve responder com JSON e mensagem correta', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'DevOps Pratica Funcionando!');
  });
});
