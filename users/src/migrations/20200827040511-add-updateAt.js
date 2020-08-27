module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn('users', 'createdAt', { type: Sequelize.DataTypes.DATE }, { transaction });
      await queryInterface.addColumn('users', 'updatedAt', { type: Sequelize.DataTypes.DATE }, { transaction });
      await transaction.commit();
    }
    catch (e) {
      await transaction.rollback();
      throw e;
    }
  },

  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.removeColumn('users', 'createdAt', { type: Sequelize.DataTypes.DATE }, { transaction });
      await queryInterface.addColumn('users', 'updatedAt', { type: Sequelize.DataTypes.DATE }, { transaction });
      await transaction.commit();
    }
    catch (e) {
      await transaction.rollback();
      throw e;
    }
  }
};
