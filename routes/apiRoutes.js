const Workout = require('../models/workout')

module.exports = function(app){
app.post('/api/workout',(req,res)=>{
    Exercises(req.body) 
    Exercises.save().then(()=>{
        res.json(Workout)
    }).catch((e)=>{
        console.log(e)
    })
})
}
