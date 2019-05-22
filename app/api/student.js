module.exports = (app, db) => {
    app.get( "/students", (req, res) =>
      db.student.findAll().then( (result) => res.json(result) )
    );
  
    app.get( "/student/:id", (req, res) =>
      db.student.findById(req.params.id).then( (result) => res.json(result))
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
        classroom_id: req.body.classroom_id,
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