const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {                 // establishes a connection with the game server
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });


  conn.setEncoding("utf8");         // interpret incoming data as text
  conn.on("connect", () => {      // code that does something when the connection is first established
    console.log("Successfully connected to game server");
    conn.write("Name: RKV");

    // setTimeout(function () {
    //   conn.write("Move: up");
    // }, 500);

  });

  conn.on("data", (messageFromServer) => {
    // code that does something when the connection is first established

    console.log(messageFromServer);
  });

  return conn;
};

module.exports = { connect }