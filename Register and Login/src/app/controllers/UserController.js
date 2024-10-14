const User = require('../models/User');
class UserController {
    register (req, res, next ){
        res.render('IndexChung/register');
    }
  
    //Post
    created(req, res, next ){
        const username = req.body.username;
        const password = req.body.password;
        const email = req.body.email;
        const sdt = req.body.sdt;

      const NewUser = new User ({username:username,password:password,email:email,sdt:sdt, role:"user"});

      // console.log(username,password,email,sdt)
      NewUser.save()
        .then( ()=> {
          res.redirect('/register')
        })
        .catch(next)

    }
      //LOGIN (GET)
      login(req, res,next ){
        res.render('IndexChung/login')
      }
         //LOGIN (POST)
         logined(req, res,next ){
       const{username,  password }= req.body; 
          console.log(username, password);
       const findUserByUsername = User.findOne({username : username })
       const findUserByPassword = User.findOne({password : password })

       Promise.all({findUserByUsername, findUserByPassword })
       .then(()=> {
          res.json({message: "success"})
       })
       .catch(error =>{
            return res.status(500).json({message: "error"});
       });
      }
    }
    
    module.exports = new UserController

