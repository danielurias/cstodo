// This file is in charge of database connection

const mongoose = require("mongoose");

function connect(callback) {
  let connectionString = `mongodb+srv://web4200:de53zYlMC2bg5lHh@cluster0.8fyqb.mongodb.net/todo?retryWrites=true&w=majority`;

  console.log("connect to db....");

  mongoose
    .connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log("There was an error connecting to mongo: ", err);
    });

  mongoose.connection.once("open", callback);
}

module.exports = {
  connect,
};