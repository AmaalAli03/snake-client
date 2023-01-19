const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: "10.0.0.74",// IP address here,
    port: 50541,  // PORT number here,
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
        //conn.write("Move:up");
  });
  return conn;
};
console.log("Connecting...")
module.exports = { connect };