import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    message: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;