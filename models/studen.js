module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define('student', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: DataTypes.STRING,
        surename: DataTypes.STRING,
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