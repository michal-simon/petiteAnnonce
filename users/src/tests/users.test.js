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
          expect(response.body).toMatchObject({
            fullName: '1 YANNICK Fremon',
            civilite: 1,
            nom: 'yannick',
            prenom: 'Fremon',
            pseudo: `Takyori${suffix}`,
            password: '123456789aA!',
            isActive: false,
            adresse: '22 rue des parisiens',
            codePostal: '13013',
            telephone: 661636585,
            email: `takyama${suffix}@gmail.com`,
            recommandations: 5,
            photo: 'https://www.fillmurray.com/64/64'
          });
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
          expect(response.statusCode).toBe(200);
          done();
        });
    });
  });
});

describe('test users api validations', () => {
  it('should test empty inputs', () => {
    return new Promise((done) => {
      request(app)
        .post('/users/')
        .send({})
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.statusCode).toBe(422);
          expect(response.body).toHaveProperty('errors', [
            { nom: 'Merci de renseignez votre nom' },
            { prenom: 'Merci de renseignez votre prénom' },
            { pseudo: 'Merci de renseignez un pseudo' },
            { password: 'Merci de renseignez un mot de passe' },
            { adresse: 'Merci de renseignez une adresse' },
            { codePostal: 'Merci de renseignez un code postal' },
            { telephone: 'Merci de renseignez un telephone' },
            { email: 'Merci de renseignez un email' }
          ]);
          done();
        });
    });
  });

  it('should test invalid inputs', () => {
    return new Promise((done) => {
      request(app)
        .post('/users/')
        .send({
          nom: 1,
          prenom: 2,
          pseudo: '#',
          password: '1225564d',
          adresse: '',
          codePostal: 7500,
          telephone: '062639104885',
          email: 'test@test'
        })
        .set('Accept', 'application/json')
        .then((response) => {
          expect(response.statusCode).toBe(422);
          expect(response.body).toHaveProperty('errors', [
            { nom: 'Veuillez renseignez un nom valide' },
            { prenom: 'Veuillez renseignez un prénom valide' },
            { password: 'Votre mot de passe ne respecter pas les indications de sécurité' },
            { adresse: 'Merci de renseignez une adresse' },
            { codePostal: 'Veuillez renseignez un code postal valide' },
            { telephone: 'Veuillez renseignez un telephone valide' },
            { email: 'Veuillez renseignez un email valide' }
          ]);
          done();
        });
    });
  });
});
