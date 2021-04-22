const mongoose = require('mongoose');

const connectionURI = process.env.DATABASE_URI;

mongoose.connect(connectionURI, {
    useNewUrlParser: true, 
    useCreateIndex: true, 
    useFindAndModify: false, 
    useUnifiedTopology: true, 
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});