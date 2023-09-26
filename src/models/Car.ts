import mongoose from 'mongoose';
const { Schema } = mongoose;
const Car = new Schema({

    Car: {
        type:String
    },

    Model: {
        type:String
    },

    KilometersDriven: {
        type: Number
    },
    
    YearofManufacture:{
        type:Number
    }

    
})


export default mongoose.model("Carcollection",Car);;