const fs= require("fs");
const Sequelize= require("sequelize");
const config= require('./../config/sequelizeConfig');
const models ={};
const sequelizeConnection= new Sequelize(config.development);


fs.readdirSync(__dirname).
filter(file =>file.indexOf(".")!=0 && file !=="index.js")
.forEach(file =>{
    let model = require("./"+ file)(sequelizeConnection,Sequelize);
    models[model.name]=model.schema;
});

console.log(models);

models.paiment.belongsTo(models.User);
models.User.hasMany(models.paiment);

models.Categorie.hasMany(models.frais);
models.frais.belongsTo(models.Categorie);

models.Categorie.hasMany(models.depense);
models.depense.belongsTo(models.Categorie);

models.depense.hasMany(models.Caisse);
models.Caisse.belongsTo(models.depense);

models.paiment.hasMany(models.Caisse);
models.Caisse.belongsTo(models.paiment);

module.exports = models;
module.exports=sequelizeConnection;
