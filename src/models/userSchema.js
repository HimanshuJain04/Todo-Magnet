import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            trim: true,
        },
        avatar: {
            type: String
        },
        todos: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Todo"
            }
        ]
    },
    {
        timeStamp: true
    }
);

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;