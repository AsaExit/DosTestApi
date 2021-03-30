import express from 'express';
import mongoose from 'mongoose';

import MedsItem from '../models/mediCine.js';

const router = express.Router();

export const getMedsItems = async (req, res) => { 
    try {
        const medsItems = await MedsItem.find();
                
        res.status(200).json(medsItems);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getMedsItem = async (req, res) => { 
    const { id } = req.params;

    try {
        const medsItem = await MedsItem.findById(id);
        
        res.status(200).json(medsItem);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createMedsItem = async (req, res) => {
    const { medicine, enhet, creator } = req.body;

    const newMedsItem = new MedsItem({ medicine, enhet, creator })

    try {
        await newMedsItem.save();

        res.status(201).json(newMedsItem );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateMedsItem = async (req, res) => {
    const { id } = req.params;
    const { medicine, enhet, creator } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No medsItem with id: ${id}`);

    const updatedmedsItem = { medicine, enhet, creator, _id: id };

    await Time.findByIdAndUpdate(id, updatedmedsItem, { new: true });

    res.json(updatedmedsItem);
}

export const deleteMedsItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No medsItem with id: ${id}`);

    await MedsItem.findByIdAndRemove(id);

    res.json({ message: "MedsItem deleted successfully." });
}

export default router;