import mongoose from 'mongoose';

const medsSchema = mongoose.Schema({
    medicine: String,
    enhet:String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

var MedsItem = mongoose.model('MedsItem', medsSchema);

export default MedsItem;