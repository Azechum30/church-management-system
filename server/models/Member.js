module.exports = function(sequelize, DataTypes){
    const Member = sequelize.define('Member', {
        memberID:{
          type: DataTypes.INTEGER,
            primaryKey : true,
            allowNull: false,
            autoIncrement: true,
            initialAutoIncrement : 20231,
            validate: {
              notEmpty: true
            }
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },

        middleName :{
            type: DataTypes.STRING,
        },

        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        gender: {
            type: DataTypes.ENUM("Male", "Female"),
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        },

        DOB: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate: {
                notEmpty: true,
                isDate: true
            }
        },

        maritalStatus:{
            type: DataTypes.ENUM("Married", "Single", "Divorced", "Engaged"),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        ministry: {
            type: DataTypes.ENUM("Youth", "Women", "Youth", "Men", "Media", "Music", "Welfare", "Children", "Protocol" ),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        title:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        joinDate :{
            type: DataTypes.DATEONLY,
            allowNull: false,
            validate:{
                notEmpty: true,
                isDate: true
            }
        },

        residentialAddress: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },

        phoneNumber:{
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                notEmpty: true,
                min: 10,
            }
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail: true,
                is: /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/
            }
        },

        password: {
            type: DataTypes.STRING(64),
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    });

    return Member;
}