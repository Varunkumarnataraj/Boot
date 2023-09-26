import express from 'express';
const router = express.Router();

import {register,getUser,deleteUser,updateUser} from '../controllers/User';



router.post("/post",register);

router.get("/gets",getUser);

router.delete("/delete/:id",deleteUser);

router.put("/put/:id",updateUser);










export default router;


