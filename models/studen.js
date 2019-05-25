module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        surename: DataTypes.STRING,
        classroomId: // name of the key we're adding 
        {
          type: DataTypes.INTEGER,
          references: {
            model: 'Classroom', // name of Target model
            key: 'id', // key in Target model that we're referencing
          },
          // ,
          onUpdate: 'SET NULL',
          // onDelete: 'NO ACTION',
          onDelete:  "CASCADE",
          // allowNull: false
        }
      },
      {
        freezeTableName: true,
        timestamps: false
      
      }
    );
  
    Student.associate = (models) => {
        Student.belongsTo(models.classroom);
    };
  
    return Student;
  }