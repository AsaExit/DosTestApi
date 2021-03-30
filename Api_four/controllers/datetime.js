import express from 'express';
import mongoose from 'mongoose';

import TellTime from '../models/dateTime.js';

const router = express.Router();

export const getTellTimes = async (req, res) => { 
    try {
        const tellTimes = await TellTime.find();
                
        res.status(200).json(tellTimes);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTellTime = async (req, res) => { 
    const { id } = req.params;

    try {
        const tellTime = await TellTime.findById(id);
        
        res.status(200).json(tellTime);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTellTime = async (req, res) => {
    const { date, time, creator } = req.body;

    const newTellTime = new TellTime({ date, time, creator })

    try {
        await newTellTime.save();

        res.status(201).json(newTellTime );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTellTime = async (req, res) => {
    const { id } = req.params;
    const { date, time, creator } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No tellTime with id: ${id}`);

    const updatedtellTime = { creator, date, time, _id: id };

    await Time.findByIdAndUpdate(id, updatedtellTime, { new: true });

    res.json(updatedtellTime);
}

export const deleteTellTime = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No tellTime with id: ${id}`);

    await TellTime.findByIdAndRemove(id);

    res.json({ message: "TellTime deleted successfully." });
}

export default router;