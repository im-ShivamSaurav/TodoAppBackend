const Todo = require('../models/Todo');

exports.getTodo = async(req,res) =>{
    try{
        //fetch all the todos from the db
        const Todos = await Todo.find({});
        //response
        res.status(200).json({
            success: true,
            data: Todos,
            message: "All Todos are fetched."
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success: false,
            error : err.message,
            message: "Internal Server Error",
            
        })
    }
}

exports.getTodoById = async(req, res) =>{
    try{
        //fetch the todo from the db
        const id = req.params.id;
        const todo = await Todo.findById({_id : id});
        //response
        if(!todo){
            return res.status(404).json({
                success: false, 
                message: "Todo not found by id."
            })
        }
        res.status(200).json({
            success:true,
            data: todo,
            message: "Todo fetched by id."
        })
        
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            error: err.message,
            message: "Internal Server Error",
        })
    }
}