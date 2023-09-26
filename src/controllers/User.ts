
import userModel from '../models/User';


//Post function for user
export const register = async (req, res) => {
  const { Name,  Mailid, Password} =   req.body;
  try {
    await userModel.create({ Name,  Mailid, Password
    });
    res.status(200).send({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.status(400).send({ status: "Error" });
  }
};


//Get function for user
export const getUser = async (req,res)=>{
  try{  
    const Userdetails=await userModel.find(); 
      res.send({status:"ok",data:Userdetails});  
     }catch(error){ 
    console.log(error); 
      }
     }


//Delete function for user
export const deleteUser = async (req,res) =>{
  try{
    const Userdel = await userModel.findByIdAndDelete(req.params.id);
    if(!req.params.id){
      return res.status(400).send({message:"error"});
    }
    res.send({message:"User Deleted"});
  }catch(e){
    res.status(500).send(e);
  }
}


//Update function for user
export const updateUser = async (req,res)=>{
  try{
     const updateuser=await userModel.findByIdAndUpdate(req.params.id);
    res.send(updateuser);
  }catch(e){
    res.status(400).send(e);
  }
}



