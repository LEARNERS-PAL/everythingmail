import {Router} from 'express';
import { sendController } from '../controllers/send.controllers';

const router = Router();

router.post("/", sendController)

export default router;