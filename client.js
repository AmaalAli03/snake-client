const net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP,// IP address here,
    port: PORT,  // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data)=> {
    // code that does something when the connection is first established
    console.log(data);
  });
  conn.on("connect", () => {
    // In the call back execution we are
  //  printing a message for the player to see once  connected
    console.log("We are connected sucessfully!");
    //writing data to server upon connection  
    conn.write("Name: A.A");
  
  });
  return conn;
};
console.log("Connecting...")
module.exports = { connect };