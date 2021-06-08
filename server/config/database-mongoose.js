const mongoose = require("mongoose");
require("dotenv").config();

// Build the connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
  autoIndex: true, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
  socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
  family: 4, // Use IPv4, skip trying IPv6
};
// Build the connection string
const dbURI = process.env.DB_URI;
// const dbURI = "mongodb+srv://dbAdmin:P%40ssw0rd@cluster0.eawmx.mongodb.net/hrDB?retryWrites=true&w=majority";

// Create the database connection
mongoose
  .connect(dbURI, options)
  .then(() => onConnected)
  .catch(() => onError);
const db = mongoose.connection;

// CONNECTION EVENTS
// When successfully connected
const onConnected = db.on("connected", () => {
  console.log("Mongoose default connection open to database: " + db.name);
});

// If the connection throws an error
const onError = db.on("error", (err) => {
  console.log("Mongoose default connection error: " + err);
});

// When the connection is disconnected
const onDisconnected = db.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
  setInterval(() => {
    console.log("Retrying to connect again to DB...");
  }, 3000);
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  db.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  });
});

module.exports = mongoose.connection;
