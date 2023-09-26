import express from 'express';
const router = express.Router();

import {carRegis,getCar} from '../controllers/Car';

router.post("/post",carRegis);

router.get ("/get",getCar);

export default router;