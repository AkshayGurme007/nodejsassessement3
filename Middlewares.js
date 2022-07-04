const express = require("express");

const app = express();

const Middleware1 = (req, res, next) => {
  console.log("Middleware 1");
  next();
};
app.use(Middleware1);

const Middleware2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
};

app.get("/", Middleware2, (req, res) => {
  res.send("<h1>Main Page with middleware1 and Middleware2</h1>");
});
app.get("/firstpage", Middleware2, (req, res) => {
  res.send("<h1>first Page with middleware1 and Middleware2</h1>");
});
app.get("/secondpage", (req, res) => {
  res.send("<h1>first Page with middleware1</h1>");
});
app.get("/thirdpage", (req, res) => {
  res.send("<h1>first Page with middleware1</h1>");
});

app.listen(4005);
