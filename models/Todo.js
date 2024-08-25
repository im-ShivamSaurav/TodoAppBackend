const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength: 50
        },
        description:{
            type:String,
            required:true,
            maxLength: 200
        },
        created_at:{
            type:Date,
            default: Date.now
        },
        updated_at:{
            type:Date,
            default: Date.now
        },
    }
);

module.exports = mongoose.model('Todo', todoSchema);