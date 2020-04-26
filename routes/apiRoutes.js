const Workout = require('../models/workout')

module.exports = function(app){

    app.post('/api/workout', ({body},res)=>{
        Workout.create(body)
        .then(dbWorkout =>{
            res.json(dbWorkout)
        }).catch(err=>{
            res.json(err)
        })
    })
    app.get('/api/workout',(req,res)=>{
    Workout.find({})

    .then(dbWorkout =>{
        res.json(dbWorkout)
    }).catch(err=>{
        res.json(err)
    })
})
}