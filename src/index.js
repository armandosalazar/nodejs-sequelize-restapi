import app from './app';
import sequelize from './database/database';
// import './models/Project';
// import './models/Task';

async function main() {
  try {
    // await sequelize.sync({ force: true });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  app.listen(3000);

  console.log('Server running on port', 3000);
}

main();
