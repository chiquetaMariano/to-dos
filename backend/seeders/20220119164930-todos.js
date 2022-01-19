'use strict';

const { QueryTypes } = require("sequelize");
const faker = require("@faker-js/faker");

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query(`SELECT id FROM Users`, {type: QueryTypes.SELECT});
    const ids = users.map(user => user.id);
    debugger;

    await queryInterface.bulkInsert('Todos', [...Array(20)].map(() => ({
      description: faker.lorem.words(),
      completed: faker.datatype.boolean(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      UserId: faker.random.arrayElement(ids)
    })), {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('Todos', null, {});
  }
};
