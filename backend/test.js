const http = require("http");

const data = JSON.stringify({
  name: "T-Shirt",
  price: 499
});

const options = {
  hostname: "localhost",
  port: 3000,
  path: "/products",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length
  }
};

const req = http.request(options, (res) => {
  let response = "";
  res.on("data", chunk => response += chunk);
  res.on("end", () => console.log(response));
});

req.write(data);
req.end();
