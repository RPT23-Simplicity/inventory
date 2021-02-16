const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/inventory',  
  {
    poolSize: 10, 
    bufferMaxEntries: 0, 
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to the database!');
});

module.exports = db;
