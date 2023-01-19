

// establishes a connection with the game server
const { connect } = require("./client.js");


const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
const handleUserInput = function (key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
  if (key === 'w') { // \u0003 maps to ctrl+c input
    process.exit();
  }
};
const conn = connect();
setupInput(conn)