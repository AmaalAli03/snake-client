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
  return conn;
};
module.exports = { connect };