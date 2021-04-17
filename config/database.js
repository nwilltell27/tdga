const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:abc1234@cluster0.snefq.mongodb.net/TDGA?retryWrites=true&w=majority';

mongoose.connect(connectionString, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true, 
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});