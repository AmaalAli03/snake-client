let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};
// const moveCommands = {
//   w : "Move: Up",
//   a : "Move: left",
//   s : "Move: down",
//   d : "Move: right"

// }
const handleUserInput = function(key) {
  if (key === '\u0003') { // \u0003 maps to ctrl+c input
    process.exit();
  }
  // if(moveCommands[key]){
  //   connection.write(moveCommands[key])
  // }
  if (key === "w") {
    connection.write("Move: up");
    console.log("Move: up");

  }
  if (key === "a") {
    connection.write("Move: left");
    console.log("Move: left");

  }
  if (key === "s") {
    connection.write("Move: down");
    console.log("Move: down");

  }
  if (key === "d") {
    connection.write("Move: right");
    console.log("Move: right");

  }
};
module.exports = { setupInput };
