import request from 'supertest';
import app from '../app';

describe('test users api', () => {
  // avoid constraint Unique insertion
  const suffix = Math.floor(Math.random() * 100);
  let id;

  it('should test post()', () => {
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
          adresse: '22 rue des parisiens',
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
          expect(response.body.pseudo).toBe(`Takyori${suffix}`);
          id = response?.body?.id;
          done();
        });
    });
  });

  it('should test get()', () => {
    return new Promise((done) => {
      request(app)
        .get(`/users/${id}`)
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.statusCode).toBe(200);
          expect(response.body.pseudo).toBe(`Takyori${suffix}`);
          done();
        });
    });
  });

  it('should test put()', () => {
    return new Promise((done) => {
      request(app)
        .put(`/users/${id}`)
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
  it('should test delete()', () => {
    return new Promise((done) => {
      request(app)
        .delete(`/users/${id}`)
        .then((response) => {
          console.log(response.body, suffix);
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
});

describe('test users api validations', () => {
  it('should test triggers errors', () => {
    return new Promise((done) => {
      request(app)
        .post('/users/')
        .send({})
        .set('Accept', 'application/json')
        .then((response) => {
          console.log(response.body);
          expect(response.statusCode).toBe(422);
          done();
        });
    });
  });
});
