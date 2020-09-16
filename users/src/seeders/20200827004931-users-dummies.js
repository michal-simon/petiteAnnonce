const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [{
        civilite: '0',
        nom: 'Afjnik',
        prenom: 'Hassan',
        pseudo: 'Yecodeo',
        password: bcrypt.hashSync('123456', 10),
        isActive: false,
        adresse: '14 rue de prony',
        codePostal: '92600',
        telephone: '0661656000',
        email: 'yecodeo@gmail.com',
        recommandations: 5,
        photo: 'https://www.fillmurray.com/64/64',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        civilite: '1',
        nom: 'Afjnik',
        prenom: 'Kalvin',
        pseudo: 'admin',
        password: bcrypt.hashSync('123456', 10),
        isActive: true,
        adresse: '14 rue de prony',
        codePostal: '92600',
        telephone: '0661656000',
        email: 'afjnik@gmail.com',
        recommandations: 5,
        photo: 'https://www.fillmurray.com/64/64',
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
