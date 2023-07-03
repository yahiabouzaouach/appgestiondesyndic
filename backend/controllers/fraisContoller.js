const {models}= require("../models/index");
const storages = require("../libs/handystorage");
const fraisController = {
    getAllfrais: (req, res) =>{
        res.render('./main');
    },
    getfrais :(req, res) =>{
        res.send("single frais")
    },
    showCreatefrais: (req, res) =>{
        res.render('./createfrais');
    },
    createfrais: (req, res) =>{
        if(req.body.Nom==""||req.body.description==""||req.body.montant==""){
           res.status(500).render('./createfrais',{err:"please fill all blanks"})
           console.log("first")}
        else {console.log("second")
            models.frais.create({nom:req.body.Nom,
                                description:req.body.description,
                                montant:req.body.montant,
                                NomCat:storages.state.categories.NomCat
                            })
            .then((frais) => { res.status(201).render('./createfrais')}).catch ((err) => res.status(500).render('./createfrais'))
            .catch(err =>{
                res.status(500).render("/create",{err :`there was an error:${err}`})
            })

        }
    },
    updateFrais: (req, res) =>{
            res.send("update")
    },
    deleteFrais: (req, res) =>{
        res.send("delete")

    },
}
module.exports = fraisController;