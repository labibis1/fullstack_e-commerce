const { default: mongoose, Schema } = require("mongoose");



const userSchema = new  Schema({
    name: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: [true, "This email already exist in our system"],
    },

    password: {
        type: String,
        required: true,
    },

    phone: {
        type: String,
        // unique: [true, "This phone number already exist in our system"]
    },


    
    role: {
        type: String,
        enum: ["user", "admin"],
        default: "user"
    },

    otp: {
        type: String,
    },

    isVerify: {
        type: Boolean,
        default: false,
    }

},{
    timestamps: true,
})

module.exports =  mongoose.model("user", userSchema)
