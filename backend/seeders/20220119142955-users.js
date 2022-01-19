"use strict";
const faker = require("@faker-js/faker");
const argon2 = require("argon2");
const randomBytes = require("crypto").randomBytes;

async function usersFactory(quantity) {
  let users = [];

  for(let i = 0, user; i < quantity; i++) {
    user = {
      fullname: faker.name.findName(),
      email: faker.internet.email(),
      password: await argon2.hash(faker.lorem.words(), { salt: randomBytes(32) }),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent()
    };
    users.push(user);
  }

  return users;
}

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', await usersFactory(10), {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
