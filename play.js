const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host:  'localhost',
    port:  50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
var conn = connect();


conn.on("connect", () => {
  // code that does something when the connection is first established

  console.log("connection Established");

});


conn.on("data", (message) => {
  // code that does something when the connection is first established

  console.log(message);
});

