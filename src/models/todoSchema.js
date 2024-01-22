import mongoose from "mongoose";

const todoSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        title: {
            type: String,
        },
        imageUrl: {
            type: String,
        },
        time: {
            type: Date
        },
        description: {
            type: String
        },
    },
    {
        timeStamp: true
    }
);

const Todo = mongoose.models.todos || mongoose.model("Todo", todoSchema);

export default Todo;