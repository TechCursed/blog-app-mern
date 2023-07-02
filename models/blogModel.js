const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: [true, "title is required"],
    },
    description: {
        type: String,
        require: [true, "description is required"],
    },
    image: {
        type: String,
        require: [true, "image is required"],
    },
    //creating blog relation with user
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: [true, "user is required"],
    }
},
{timestamps: true}
)

const blogModel = mongoose.model("Blog", blogSchema);
module.exports = blogModel;