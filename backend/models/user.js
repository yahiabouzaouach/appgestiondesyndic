module.exports = (sequelize,DataTypes)=>{
const User =sequelize.define("User",{
    CIN:{
    type:DataTypes.STRING,
    primaryKey: true,
    allowNull: false
},nom:{
    type:DataTypes.STRING,
    allowNull: false
},prenom:{
    type:DataTypes.STRING,
    allowNull: false
},mail:{
    type:DataTypes.STRING,
    allowNull: false,
},password:{
    type:DataTypes.STRING,
    allowNull: false,
    unique: true,
},numbloc:{
    type:DataTypes.INTEGER,
    allowNull: false
},numhabitat:{
    type:DataTypes.INTEGER,
    allowNull: false
},numTel:{
    type:DataTypes.STRING,
    allowNull: false
}
}
);
return {name:'User',schema: User}  
}