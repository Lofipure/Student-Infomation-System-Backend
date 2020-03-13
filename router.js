var express = require("express");

var router = express.Router();
var doing = require("./doing");

router
  .get("/", (request, response) => {
    doing.getAll(request, response);
  })
  .get("/getone", (request, response) => {
    doing.getOne(request, response);
  })
  .post("/add", (request, response) => {
    doing.add(request, response);
  })
  .get("/delete", (request, response) => {
    doing.delete(request, response);
  });

module.exports = router;
