const jwt = require("jsonwebtoken");
const JWT_SECRET = "varunkumar";


const validate = (req,res,next)=>{

    let token = req.headers['authorization']
    jwt.verify(token, JWT_SECRET, function(err, decoded) {
        if(err){
            return res.send({message : "Invalid Token"})
        }
         next();
        console.log(decoded) 
      });

}

module.exports = validate;