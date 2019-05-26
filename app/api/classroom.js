const Sequelize = require('sequelize');
module.exports = (app, db) => {
  console.log("class rooms");


  const Op = Sequelize.Op;
  app.get( "/classrooms/search/:value", (req, res) =>
  db.classroom.findAll(

    {
      include: [{
        model: db.student,
    }],
      where: {
        name: {
          [Op.like]: '%'+req.params.value+'%'
        }
      }
    }

  ).then( (result) => res.json(result) )
);

    app.get( "/classrooms", (req, res) =>
      db.classroom.findAll(
        {
        include: [{
          model: db.student,
      }]}
).then( (result) => res.json(result) )
    );
  
    app.get( "/classroom/:id", (req, res) =>
      db.classroom.findById(req.params.id).then( (result) => res.json(result))
    );
  
    app.post("/classroom", (req, res) => 
    
      db.classroom.create({
        
        name: req.body.name,
        school: req.body.school
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/classroom/:id", (req, res) =>
      db.classroom.update({
        name: req.body.name,
        school: req.body.school
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/classroom/:id", (req, res) =>
      db.classroom.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }