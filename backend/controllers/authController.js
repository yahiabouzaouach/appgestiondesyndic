const conn = require("../config/sequelizeConfig");
const bcrypt = require("bcrypt");
const { models } = require("../models/index");
const jwt = require("jsonwebtoken");
const storage = require("../libs/handystorage");
const userUpload = require("../libs/users");
const fs= require("fs");
const handle = require("../libs/promiseHandler");
const authController = {
  showRegister: (req, res) => {
    res.render("./register");
  },

  register: (req, res) => {
   if (conn.error) {
      res.status(500)
    }
    else {
      userUpload(req, res,(err)=> {
        if (err) {res.status(500).render("./register",{err:"error upload"})}
    else{
        if (req.body.mail===""||req.body.password===""){
        res.status(403).render("./register",{err:"please fill all the form"});
      }
        else{
          let hash = bcrypt.hashSync(req.body.password,10);
          models.User.create({
            CIN: req.body.CIN,
            nom: req.body.nom,
            prenom: req.body.prenom,
            mail: req.body.mail,
            password: hash,
            numbloc: req.body.numbloc,
            numhabitat: req.body.numhabitat,
            numTel: req.body.numTel,
          }).then((user)=>{
            console.log(user);
            storage.setState({
              token:jwt.sign({user:req.body.mail},"supersecretpassword"),
              user:user.dataValues
            })
            res.status(201).redirect('/')
          }).catch(err=>{
            console.log(err); 
          })
        }
    }
      })
    }
    },
          
      
  showlogin: (req, res) => {
    res.render("./login");
  },

  login: async (req, res) => {
    userUpload(req, res, async (err) => {
      if (err) {
        console.log(err);
      }
  
      try {
        const condition = { mail: req.body.mail };
        console.log("first", condition);
  
        const [user, userError] = await handle(models.User.findOne({
          where: condition,
          include: [{ model: models.paiment }],
        }));
        console.log("second", userError);
  
        if (userError) {
          console.log("third");
          res.status(500).render("./login", { err: "Error reaching the user, please try again later" });
        }
        console.log("third");
  
        if (user) {
          console.log("fourth");
          const password = req.body.password;
          const userHash = user.dataValues.password;
          const success = await bcrypt.compare(password, userHash);
          if (!success) {
            res.status(500).render("./login", { err: "There was an error, please try again later" });
          } else {
            console.log("fifth");
            storage.setState({
              token: jwt.sign({ user: req.body.mail }, "supersecretword", { expiresIn: "2h" }),
              user: user.dataValues,
            });
            
            console.log("sixth");
  
            user.paiments.map((p) => {
              p.dataValues;
            });
        
            console.log("seventh");
            return res.status(200).redirect("/");
          }
        }
      } catch (error) {
        console.log("error", error);
        return res.status(500).send({
          message: 'MSG.USER_LOGIN_FAILED',
        });
      }
    });
  },
  logout: (req, res) => {
      storage.setState({token:"",user:""});
      res.redirect("/auth/login");
  },

  showdashboard: (req, res) => {
    // Implement dashboard display functionality
  },
};

module.exports = authController;