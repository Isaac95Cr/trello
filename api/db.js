const mongoose = require('mongoose');

module.exports = (connectionString) => {
  return mongoose.connect(connectionString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Kawaboonga', 'Mongo is up and running!');
    }
  });
}
