module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      civilite: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Civilité'
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Nom'
      },
      prenom: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Prénom'
      },
      pseudo: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: 'Pseudo'
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        min: 8,
        max: 14,
        comment: 'Mot de passe'
      },
      isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        comment: 'État du compte'
      },
      adresse: {
        type: Sequelize.STRING,
        comment: 'Adresse postale'
      },
      codePostal: {
        type: Sequelize.STRING,
        comment: 'Code postale'
      },
      telephone: {
        type: Sequelize.INTEGER,
        comment: 'Téléphone'
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: 'E-mail'
      },
      //   publications: {
      //     type: Schema.ObjectId,
      //     ref: 'Publication',
      //     comment: 'Liste des annonces publiées'
      //   },
      recommandations: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        comment: 'Recommandation'
      },
      photo: {
        type: Sequelize.STRING,
        defaultValue: 'https://www.fillmurray.com/64/64',
        comment: 'Photo'
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
