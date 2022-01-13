'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Admins', 
      [{
         name: 'Admin',
         email : 'admin@gmail.com',
         password : 'adminadmin',
         isAdmin : true,
         createdAt : new Date(),
         updatedAt : new Date()
       },
       {
         name: 'Admin2',
         email : 'user@gmail.com',
         password : 'useruser',
         isAdmin : false,
         createdAt : new Date(),
         updatedAt : new Date()
       },
     
     ], 
     {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
