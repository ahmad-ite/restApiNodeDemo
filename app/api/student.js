// import{Classroom}from './classroom'
// import {Classroom} from '../../models/classroom'
const Sequelize = require('sequelize');
module.exports = (app, db) => {
  
const Op = Sequelize.Op;
  app.get( "/students/search/:value", (req, res) =>
  db.student.findAll(

    {
      include: [{
        model: db.classroom ,
    }],
      where: {
        name: {
          [Op.like]: '%'+req.params.value+'%'
        }
      }
    }

  ).then( (result) => res.json(result) )
);
app.get( "/classroom/students/:classroomId", (req, res) =>
db.student.findAll(

  {
    include: [{
      model: db.classroom ,
  }],
    where: {
      classroomId:req.params.classroomId
    }
  }

).then( (result) => res.json(result) )
);
    app.get( "/students", (req, res) =>
      db.student.findAll(
        {
          include: [{
            model: db.classroom
            ,
        }]}
        // { model: module.classroom, required: true }

      ).then( (result) => res.json(result) )
    );
  
    app.get( "/student/:id", (req, res) =>
      db.student.findById(req.params.id
        
        ).then( (result) => res.json(result))
    );
  
    app.post("/student", (req, res) => 
      db.student.create({
        name: req.body.name,
        surename: req.body.surename,
        classroomId: req.body.classroomId,
      }).then( (result) => res.json(result) )
    );
  
    app.put( "/student/:id", (req, res) =>
      db.student.update({
        name: req.body.name,
        surename: req.body.surename,
        classroomId: req.body.classroomId,
      },
      {
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  
    app.delete( "/student/:id", (req, res) =>
      db.student.destroy({
        where: {
          id: req.params.id
        }
      }).then( (result) => res.json(result) )
    );
  }