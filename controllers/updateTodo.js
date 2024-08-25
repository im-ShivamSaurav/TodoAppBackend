const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try{
        const id = req.params.id;
        const {title, description} = req.body;
        //find the todo by id and update
        const todo = await Todo.findByIdAndUpdate(
            {_id: id}, 
            {title, description,updatedAt: Date.now()},
        );
        res.status(200).json({
            success:true,
            data: todo,
            message:  "Successfully updates the todo",
        })

    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Internal Server Error",
        })
    }
}