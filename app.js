const express = require("express");
const app = express();
const port = 3000;
var router = require("./router");

app.use(router); //引用外置路由

app.listen(port, () => {
  console.log("visit http://localhost:3000");
});

// express托管静态文件，使用express.static(root,[options]);
app.use(express.static("public"));
