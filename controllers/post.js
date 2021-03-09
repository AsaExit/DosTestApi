const Post = require('./../models/post');

exports.getAllPosts = async (req, res, next) => {
    const posts = await Post.find({ createdBy: req.user.id });
    res.status(200).json(posts);
};

exports.postPost = async (req, res, next) => {
    const newPost = new Post(req.body);
    newPost.createdBy = req.user.id;
    try {
        const post = await newPost.save();
        res.status(201).json(post);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.getPostById = async (req, res, next) => {
    const { postId } = req.params;
    try {
        const post = await Post.findById(postId);
        res.status(200).json(post);
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.updatePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        await Post.findByIdAndUpdate(postId, req.body);
        res.status(200).json({ success: true });
    } catch (error) {
        error.status = 400;
        next(error);
    }
};

exports.deletePost = async (req, res, next) => {
    const { postId } = req.params;
    try {
        await Post.findOneAndDelete(postId);
        res.status(200).json({ success: true });
    } catch (error) {
        error.status = 400;
        next(error);
    }
};
exports.searchPosts = async(req, res) => {
    const { q } = req.body
    const regex = new RegExp( q || '', 'i')
    console.log(`Searching posts by query=${q} .....`)
    try {
        let data
        switch(q) {
        case "textmsg":
          const posts = await Post.find().populate( 'textmsg')
          data = posts.filter(a => {
            if (a.textmsg) {
              return a.textmsg.textmsg.match(regex)
              } 
              return false
                })
                break
            default:
            data = []
        }
        res.status(201).send(data)
    } catch (error) {
        res.status(500).send({
            message: 'Internal server error'
        })
    } 
};