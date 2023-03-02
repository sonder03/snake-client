let connection;
const setupInput = function (conn) {

  connection = conn;

  const stdin = process.stdin;
  stdin.on("data", handleUserInput);
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
};

const handleUserInput = function (userInput) {
  connection.write("Say: Funny?");
  if (userInput === '\u0003') {
    process.exit();
  }
  if (userInput === 'w') {
    connection.write("Move: up");
  }
  else if (userInput === 'a') {
    connection.write("Move: left");
  }
  else if (userInput === 's') {
    connection.write("Move: down");
  }
  else if (userInput === 'd') {
    connection.write("Move: right");
  }

  else {
    console.log(userInput);
  }
};


module.exports = { setupInput }


