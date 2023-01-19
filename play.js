

// establishes a connection with the game server
const { connect } = require("./client");
const { setupInput } = require("./input");
console.log("Connecting ...");

const conn = connect();
setupInput(conn);

// const handleUserInput = function (key) {
//   if (key === '\u0003') { // \u0003 maps to ctrl+c input
//     process.exit();
//   }
//   // if (key === 'w') { // \u0003 maps to ctrl+c input
//   //   process.exit();
//   // }
// };
// const conn = connect();
// setupInput(conn)
