const clientConnection = require("./client.js");

console.log("Connecting ...");
var conn = clientConnection.connect();


conn.on("connect", () => {
  // code that does something when the connection is first established

  console.log("Successfully connected to game server");

  conn.write("Name: RKV");
  
});

conn.on("data", (message) => {
  // code that does something when the connection is first established

  console.log(message);
});

