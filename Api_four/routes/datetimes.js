import express from 'express';
import { createTellTime, deleteTellTime, getTellTime, getTellTimes, updateTellTime } from '../controllers/datetime.js';

const router = express.Router();

router.get('/', getTellTimes);
router.post('/', createTellTime);
router.get('/:id', getTellTime);
router.patch('/:id', updateTellTime);
router.delete('/:id', deleteTellTime);


export default router;