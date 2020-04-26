const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day:{
        type: Date,
        default: ()=>new Date()
    }
    // exercises:[
    //     {
    //         type:{
    //             type: String,
    //             trim: true,
    //             required: "Exercise Type"
    //         },
    //         name:{
    //             type: String,
    //             trim: true,
    //             required: "Exercise Name"
    //         },
    //         duration:{


    //         }
    //     }
    // ]

})

const Workout = mongoose.model("Exercises", workoutSchema)
module.exports = Workout