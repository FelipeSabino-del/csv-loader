import "@testing-library/jest-dom";
import request from 'supertest';
import app from '../index';

beforeAll((done) => {
  done();
});

afterAll((done) => {
  done();
});

describe('GET /api/users', () => {
  it('should return a list of users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(response.body.data).toBeInstanceOf(Array);
  });
  app.off;
});
