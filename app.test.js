const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('responds with HTML containing animated text', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Welcome to Animated Node.js App!');
    expect(response.text).toContain('This text is animated using CSS!');
  });
});
