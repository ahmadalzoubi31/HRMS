const database = require("mysql");
const dotenv = require("dotenv");

// Fetch the database options
dotenv.config();

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'P@ssw0rd' // Use it when you can't login to the database

// const dbOptions = {
//   host: process.env.MYSQL_HOST,
//   port: process.env.MYSQL_PORT,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASS,
//   database: process.env.MYSQL_DB,
// };

const dbOptions = {
  host: process.env.MYSQL_HOST_LOCAL,
  port: process.env.MYSQL_PORT_LOCAL,
  user: process.env.MYSQL_USER_LOCAL,
  password: process.env.MYSQL_PASS_LOCAL,
  // database: process.env.MYSQL_DB_LOCAL,
};

//- Create the connection variable
let connection = database.createConnection(dbOptions);

//- Establish a new connection
connection.connect((err) => {
  if (err) {
    console.log("*** Can't established with the database ***");
    console.error("error: ", err.code);
  } else {
    console.log("*** New connection established with the database ***");

    // Create DB if not Exist
    let sqlQuery = `CREATE DATABASE IF NOT EXISTS hrDB;
                    SHOW WARNINGS;`;
    connection.query(sqlQuery, (err, res) => {
      if (err) {
        console.error({ error: err.message });
        return;
      }

      console.log(res);
    });
  }
});

//- Reconnection function
function reconnect(connection) {
  console.log("New connection tentative...");

  //- Destroy the current connection variable
  if (connection) connection.destroy();

  //- Create a new one
  connection = database.createConnection(dbOptions);

  //- Try to reconnect
  connection.connect((err) => {
    if (err) {
      //- Try to connect every 2 seconds.
      setTimeout(reconnect, 2000);
    } else {
      console.log("*** New connection established with the database ***");
      return connection;
    }
  });
}

//- Error listener
connection.on("error", (err) => {
  //- The server close the connection.
  if (err.code === "PROTOCOL_CONNECTION_LOST") {
    console.log(
      "/!\\ Cannot establish a connection with the database. /!\\ (" +
        err.code +
        ")"
    );
    connection = reconnect(connection);
  }

  //- Connection in closing
  else if (err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT") {
    console.log(
      "/!\\ Cannot establish a connection with the database. /!\\ (" +
        err.code +
        ")"
    );
    connection = reconnect(connection);
  }

  //- Fatal error : connection variable must be recreated
  else if (err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
    console.log(
      "/!\\ Cannot establish a connection with the database. /!\\ (" +
        err.code +
        ")"
    );
    connection = reconnect(connection);
  }

  //- Error because a connection is already being established
  else if (err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE") {
    console.log(
      "/!\\ Cannot establish a connection with the database. /!\\ (" +
        err.code +
        ")"
    );
  }

  //- Error because a connection not establish correctly
  else if (err.code === "ER_NOT_SUPPORTED_AUTH_MODE") {
    console.log(
      "/!\\ Cannot establish a connection with the database. /!\\ (" +
        err.code +
        ")"
    );
  }

  //- Anything else
  else {
    console.log(
      "/!\\ Cannot establish a connection with the database. /!\\ (" +
        err.code +
        ")"
    );
    connection = reconnect(connection);
  }
});

module.exports = connection;
