import request from 'supertest';
import app from '../app';
import db from '../models';

import usersSeed from './seeds/users_seed';

beforeAll(async () => {
  await db.models.user.create(usersSeed).then((result) => {
    console.log(result);
  }).catch((err) => console.log(err));
});
describe('test users api', () => {
  it('should test get()', () => {
    return new Promise((done) => {
      request(app)
        .get('/users/profil/1')
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
//   it('should test post()', () => {
//     return new Promise((done) => {
//       request(app)
//         .post('/users/')
//         .send({ name: 'john' })
//         .set('Accept', 'application/json')
//         .then((response) => {
//           expect(response.statusCode).toBe(200);
//           done();
//         });
//     });
//   });
//   it('should test put()', () => {
//     return new Promise((done) => {
//       request(app)
//         .put('/users/')
//         .then((response) => {
//           expect(response.statusCode).toBe(200);
//           done();
//         });
//     });
//   });
//   it('should test delete()', () => {
//     return new Promise((done) => {
//       request(app)
//         .delte('/users/')
//         .then((response) => {
//           expect(response.statusCode).toBe(200);
//           done();
//         });
//     });
//   });
});
