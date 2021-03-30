import express from 'express';
import { getMedsItem, getMedsItems, createMedsItem, updateMedsItem, deleteMedsItem } from '../controllers/medicines.js';

const router = express.Router();

router.get('/', getMedsItems);
router.post('/', createMedsItem);
router.get('/:id', getMedsItem);
router.patch('/:id', updateMedsItem);
router.delete('/:id', deleteMedsItem);


export default router;