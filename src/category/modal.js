const { DataTypes } = require("sequelize");
const sequelize = require("../db/db");

const Category = sequelize.define("Category", {

category_id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true
},
category_name: {
    type:DataTypes.STRING,
    allowNull:false

},
category_description:{
    type:DataTypes.STRING,
    allowNull:false
},

category_status :{
    type:DataTypes.INTEGER,
    defaultValue:1,
    allowNull:false
}


},{timestamps:true,tableName:"tbl_category"});

module.exports = Category;