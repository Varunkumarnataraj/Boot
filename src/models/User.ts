import mongoose from 'mongoose';
const { Schema } = mongoose;
const Userfield = new Schema({

    Name: {
        type:String
    },

    Mailid: {
        type:String
    },

    Password: {
        type: String
    }
})


export default mongoose.model("Userdetail",Userfield);





