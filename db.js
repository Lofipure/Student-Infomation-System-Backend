var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  port: "3308",
  database: "demo"
});

connection.connect();

module.exports = {
  wh: undefined,
  where: function(whs) {
    this.wh = whs;
    return this;
  },

  select: function(callback) {
    if (this.wh == undefined) {
      var sql = "select * from student";
    } else {
      var sql = `select * from student where ${this.wh};`;
    }
    this.wh = undefined;
    connection.query(sql, (err, data) => {
      var da = data;
      console.log(sql);
      callback(da);
    });
  },

  update: function(data, callback) {
    if (this.wh == undefined) {
      console.log("No Where???");
    } else {
      var set = "";
      for (i in data) {
        set += `"${i}"="${data[i]}",`;
      }
      set = set.slice(0, set.length - 1);
      var sql = `update student set ${set} where ${this.wh};`;
      this.wh = undefined;

      connection.query(sql, (err, data) => {
        callback(data.changedRows);
      });
    }
  },

  insert: function(data, callback) {
    var set = "(";
    for (i in data) {
      if (i == "name" || i == "studentid") {
        set += `'${data[i]}',`;
      } else {
        set += `${data[i]},`;
      }
    }
    set = set.slice(0, set.length - 1);
    set += ")";

    var sql = `insert into student (studentid,name,age,score) values ${set} ;`;

    connection.query(sql, (err, datas) => {
      callback(datas.changedRows);
    });
  },

  delete: function(callback) {
    var sql = "delete from student where " + this.wh + ";";
    connection.query(sql, (err, datas) => {
      console.log(sql);
      callback(datas.changedRows);
    });
  }
};
