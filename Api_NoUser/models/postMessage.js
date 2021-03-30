import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    date: {
        type:Date
    },
    time: {
        type: String
    },
    medicine:
    {
        type: String
    },
    enhet: {
        type: String
    },
    message: {
        type: String
    },
    selectedFile:
        { type: String },
    record:
        { type: String },
    createdAt: {
        type: Date,
        default: Date.now
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;