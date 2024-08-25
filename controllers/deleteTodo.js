const Todos = require("../models/Todo");

exports.deleteTodo = async (req, res) => {
    try{
        const id = req.params.id;
        const todo = await Todos.findByIdAndDelete({_id:id});
        res.json({
            success: true,
            message: "Todo Deleted Successfully",
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