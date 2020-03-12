const mongoose = require("mongoose");
let mongoDbUri =
  "mongodb+srv://neu_recipe_user:w8BwXRmsFwwkh62j@cluster0-zqpdq.mongodb.net/Neu_Recipe_Db?retryWrites=true";
// Create the database connection
mongoose.connect(mongoDbUri, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// When successfully connected
mongoose.connection.on("connected", function() {
  console.log(`Database is connected`);
});

// If the connection throws an error
mongoose.connection.on("error", function(err) {
  console.log(`Error while connecting to the database error: ` + err);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", function() {
  console.log("Database connection is disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", function() {
  mongoose.connection.close(function() {
    console.log("Database connection is disconnected through app termination");
    process.exit(0);
  });
});
