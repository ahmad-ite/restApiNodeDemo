const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const apiClassroom = require("./app/api/classroom");
const apiStudent = require("./app/api/student");
var cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json());
db.sequelize.sync();

apiClassroom(app, db);
apiStudent(app, db);
var server = app.listen(3000,  "127.0.0.1", function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Server app listening at http://%s:%s", host, port)

});





