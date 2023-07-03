module.exports = (sequelize,DataTypes)=>{
    const paiment =sequelize.define("paiment",{
        idpaiment:{
        type:DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },montant:{
        type:DataTypes.FLOAT,
        allowNull: false
    },datepaiment:{
        type:DataTypes.DATE,
        allowNull: false
    }
    }
    );
    return {name:'paiment',schema: paiment}  
    }