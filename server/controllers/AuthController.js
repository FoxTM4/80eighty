const bcrypt = require('bcryptjs')

module.exports={
    adminLogin: async(req,res)=>{
        const {adminEmail, adminPassword} = req.body;
        const db = req.app.get('db');
        let [foundAdmin] = await db.find_admin([adminEmail]);
        if(foundAdmin){
            const validPassword = bcrypt.compareSync(adminPassword, foundAdmin.admin_hash);
            if (validPassword){
                req.session.admin = {
                    adminID: foundAdmin.admin_id,
                    adminFirst: foundAdmin.admin_first,
                    adminLast: foundAdmin.admin_last,
                    adminPhone: foundAdmin.admin_phone_number,
                    adminEmail: foundAdmin.admin_email
                };
                req.status(200).send({admin: req.session.admin});
            } else{
                res.status(201).send('Invalid Password')
            }
        } else {
            res.status(404).send('Admin email does not exist')
        }

    },
    userLogin: async(req,res)=>{
        const {userEmail, userPassword} = req.body;
        const db = req.app.get('db');
        let [foundUser] = await db.find_user([userEmail]);
        if(foundUser){
            const validPassword = bcrypt.compareSync(userPassword, foundUser.user_hash);
            if (validPassword){
                req.session.user = {
                    userID: foundUser.user_id,
                    userFirst: foundUser.user_first,
                    userLast: foundUser.user_last,
                    userPhone: foundUser.user_phone_number,
                    userEmail: foundUser.user_email
                };
                req.status(200).send({user: req.session.user});
            } else{
                res.status(201).send('Invalid Password')
            }
        } else {
            res.status(404).send('User email does not exist')
        }
    },
    userSignup: async(req,res)=>{
        let {
            userFirst,
            userLast,
            userPhone,
            userEmail,
            userPassword
          } = req.body;
          let db = req.app.get("db");
          //check for existing user account
          let [foundUser] = await db.find_user([userEmail]);
          if (foundUser) {
            res.status(409).send({ message: "Email already in use" });
          } else {
            //hash passed in password
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(userPassword, salt);
            //register new user, passing in newly created school id to user row
            let [createdUser] = await db.create_user([
                userFirst,
                userLast,
                userPhone,
                userEmail,
                hash,
            ]);
            //create user sessions object
            req.session.user = {
                userID: createdUser.user_id,
                userFirst: createdUser.user_first,
                userLast: createdUser.user_last,
                userPhone: createdUser.user_phone_number,
                userEmail: createdUser.user_email,
              
            };
            //send user session object back to frontend
            res.status(200).send({user: req.session.user});
          }
    }



}