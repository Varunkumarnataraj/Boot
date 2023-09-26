import express from 'express'
const app = express();
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/User';

import carRoutes from './routes/Car';

dotenv.config();


mongoose.connect(process.env.URI)
.then(()=>{
   console.log("Database Connected")
}
);
app.use(express.json());

app.use("/user",userRoutes)
app.use("/car",carRoutes)

app.listen(process.env.PORT,()=>{
   console.log("server started @ port:"+process.env.PORT);
   });

 

//TYPESCRIPT TUTORIALS
//Data Types

// ENUM
   enum PrintMedia {
      Newspaper,
      Newsletter,
      Magazine,
      Book
    }
    console.log(PrintMedia)

    
// Union
 function displayType(code: (string | number))
{
    if(typeof(code) === "number")
        console.log('Code is number.')
    else if(typeof(code) === "string")
        console.log('Code is string.')
}

console.log (displayType(123)); 
console.log (displayType("123")); 


//ANY
let arr: any[] = ["Varun", 24, true]; 
arr.push("Maddy"); 
console.log(arr);


//Void
function welcome(): void { 
   console.log('Hi')
} 

let speech: void = welcome(); 
console.log(speech);



// function Something(){
//   for (var i=0;i<5;i++){
//     console.log(i)
//    }
//    console.log("Finally:",i)
// }
// Something()



