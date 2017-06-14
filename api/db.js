const mongoose = require('mongoose');
mongoose.Promise = Promise;  

module.exports = (connectionString) => {
  return mongoose.connect(connectionString, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Hi :3', 'Mongo is up and running!');
    }
  });
}
