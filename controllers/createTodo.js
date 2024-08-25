const Todo = require("../models/Todo");

//define route handler

exports.createTodo = async (req, res) =>{
    try{
        // destruct and extract the tittle and body
        const {title,description} = req.body;
        // create a obj in db
        const response = await Todo.create({title,description});
        //send the json response with a success flag;
        res.status(200).json(
            {
                success: true,
                data: response,
                message: 'Entry Created Successfully',
            }
        );

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500).json(
            {
                sucess: false,
                data: "internal server error",
                message: err.message,
            }
        );
    }
}