// import {Student} from '../models/student'
module.exports = (sequelize, DataTypes) => {
    const Classroom = sequelize.define('classroom', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name:{ type: DataTypes.STRING, allowNull: false } ,
        school: DataTypes.STRING
      },
      {
        freezeTableName: true,
        
          timestamps: false
      
      }
    );
  
    Classroom.associate = (models) => {
      Classroom.hasMany(models.student);
    };
  
    return Classroom; 
  }