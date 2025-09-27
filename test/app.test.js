const request = require('supertest');
const app = require('../src/index');

describe('API Tests', () => {
    it('should return health status', async () => {
        const response = await request(app).get('/api/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('OK');
        expect(response.body).toHaveProperty('timestamp');
    });

    it('should greet the user', async () => {
        const response = await request(app).get('/api/greet/John');
        expect(response.statusCode).toBe(200);
        expect(response.body.message).toContain('John');
    });

    it('should serve static files', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.text).toContain('CI/CD Pipeline Demo');
    });
});
