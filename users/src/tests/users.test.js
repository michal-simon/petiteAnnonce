import request from 'supertest';
import app from '../app';

describe('test users api', () => {
  it('should test get()', () => {
    return new Promise((done) => {
      request(app)
        .get('/users/1')
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.id).toBe(1);
          done();
        });
    });
  });
  it('should test post()', () => {
    // avoid constraint Unique insertion
    const suffix = Math.floor(Math.random() * 100);

    return new Promise((done) => {
      request(app)
        .post('/users/')
        .send({
          civilite: '1',
          nom: 'yannick',
          prenom: 'Fremon',
          pseudo: `Takyori${suffix}`,
          password: '123456789aA!',
          isActive: false,
          adresse: '22 rue des parisien',
          codePostal: '13013',
          telephone: '0661636585',
          email: `takyama${suffix}@gmail.com`,
          recommandations: 5,
          photo: 'https://www.fillmurray.com/64/64',
          createdAt: new Date(),
          updatedAt: new Date()
        })
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.id).toBeGreaterThan(1);
          expect(response.body.pseudo).toBe(`Takyori${suffix}`);
          done();
        });
    });
  });
  it('should test put()', () => {
    return new Promise((done) => {
      request(app)
        .put('/users/1')
        .send({
          civilite: '1',
          nom: 'yannick',
          prenom: 'Freeman',
          updatedAt: new Date()
        })
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body[0].prenom).toBe('Freeman');
          done();
        });
    });
  });
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
