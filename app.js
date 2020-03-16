const express = require("express");
const app = express();
const port = 3000;
var router = require("./router");
// 跨域设置
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(router); //引用外置路由

app.listen(port, () => {
  console.log("visit http://localhost:3000");
});

// express托管静态文件，使用express.static(root,[options]);
app.use(express.static("public"));
