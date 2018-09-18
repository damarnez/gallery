const request = require('supertest');
const app = require('./index');

describe('Test the root path', () => {
    it('It should response the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});

describe('Test "/api/images"', () => {
    it('It should response the GET method', (done) => {
        request(app).get('/api/images').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });

    it('It should response only 10 elements', (done) => {
        request(app).get('/api/images?size=10').then((response) => {
            expect(response.body.photos.perpage).toBe(10);
            done();
        });
    });

    it('It should response page 2', (done) => {
        request(app).get('/api/images?page=2').then((response) => {
            expect(response.body.photos.page).toBe(2);
            done();
        });
    });
});
