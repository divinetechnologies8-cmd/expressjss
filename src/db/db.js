const { Sequelize } = require('sequelize');
const path = require('path');

// Database configuration for SQLite
const sequelize = new Sequelize("testdb","root", "",{
host:"localhost",
dialect:"mysql",
port:"3306"
})

// Test database connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ SQLite database connection established successfully.');
    console.log(`📁 Database location: ${path.join(__dirname, '../database.sqlite')}`);
  } catch (error) {
    console.error('❌ Unable to connect to SQLite database:', error);
    process.exit(1);
  }
};

testConnection();

module.exports = sequelize;