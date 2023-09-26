import Cars from '../models/Car';

//post api

export const carRegis = async (req,res)=>{
    const{Car,Model,KilometersDriven,YearofManufacture}= req.body;
    try{
        await Cars.create({Car,Model,KilometersDriven,YearofManufacture
        });
     
     res.status(200).send({ status: "Car Added Successfully" });
    } catch (error) {
  console.log(error);
  res.status(400).send({ status: "Error" });
}
};

//Get function for car
export const getCar = async (req,res)=>{
  try{  
    const Cardetails=await Cars.find(); 
      res.send({status:"ok",data:Cardetails});  
     }catch(error){ 
    console.log(error); 
      }
     }