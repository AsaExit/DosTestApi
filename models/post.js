const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, required: true },
    tomsg: { type: String, required: true },
    textmsg: { type: String, required: true },
    date: { type: Date, default: Date.now },
    category: {
        type: String,
        required: true,
        enum: ['SEND', 'OK', 'UNKNOWN']
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'user' },
    createdOn: { type: Date, default: Date.now }
});

module.exports = mongoose.model('post', postSchema);