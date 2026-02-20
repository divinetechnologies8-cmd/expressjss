const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const User = sequelize.define("Users", {

id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
user_name: {
    type:DataTypes.STRING,
    allowNull:false

},
user_email:{
    type:DataTypes.STRING,
    allowNull:false
},
user_password:{
    type:DataTypes.STRING,
    allowNull:false
},

user_address:{
    type:DataTypes.STRING,
    allowNull:true
},
user_status :{
    type:DataTypes.INTEGER,
    defaultValue:1,
    allowNull:false
}


},{timestamps:true,tableName:"tbl_user"});

module.exports = User;