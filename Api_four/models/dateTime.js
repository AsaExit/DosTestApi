import mongoose from 'mongoose';

const tellTimeSchema = mongoose.Schema({
    date: Date,
    time:String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

var TellTime = mongoose.model('TellTimes', tellTimeSchema);

export default TellTime;