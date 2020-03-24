var url = require("url");
var queryString = require("querystring");
var db = require("./db");

module.exports = {
  getAll: (request, response) => {
    db.select(data => {
      response.end(JSON.stringify(data));
    });
  },

  getOne: (request, response) => {
    var id = url.parse(request.url, true).query.id;
    console.log(url.parse(request.url, true).query.id);
    db.where(`studentid="${id}"`).select(data => {
      response.end(JSON.stringify(data));
    });
  },

  add: (request, response) => {
    var data_post = "";
    request.on("data", data_n => {
      data_post += data_n;
    });

    request.on("end", () => {
      var data_obj = queryString.parse(data_post);
      db.insert(data_obj, data => {
        let res = { meta: 200 };
        response.end(JSON.stringify(res));
      });
    });
  },

  delete: (request, response) => {
    var id = url.parse(request.url, true).query.id;
    db.where(`studentid="${id}"`).delete(datas => {
      response.end(JSON.stringify({ meta: 200 }));
    });
  }
};
