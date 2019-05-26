const express = require("express");
const bodyParser = require("body-parser");
const faker = require("faker");
const times = require("lodash.times");
const random = require("lodash.random");
const db = require("./models");
const apiPost = require("./app/api/post");
const apiAuthor = require("./app/api/author");
const apiClassroom = require("./app/api/classroom");
const apiStudent = require("./app/api/student");
// const mysql = require('mysql2');

var cors = require('cors')
const app = express();
app.use(cors())

app.use(bodyParser.json());
db.sequelize.sync();

var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Server app listening at http://%s:%s", host, port)

});



apiPost(app, db);
apiAuthor(app, db);
apiClassroom(app, db);
apiStudent(app, db);

