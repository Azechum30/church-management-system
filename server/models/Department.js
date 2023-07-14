module.exports = function(sequelize, DataTypes){
    const Department = sequelize.define("Department", {
        departmentID : {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        name: {
            type: DataTypes.ENUM("Youth", "Women", "Men", "Children", "Music", "Protocol", "Welfare", "Technical", "Media"),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        depHeadID: {
            type: DataTypes.INTEGER,
        },

        budget :{
            type: DataTypes.DECIMAL(15, 2),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        goals: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    });

    return Department;
}