const express = require('express')

const route = express.Router()

route.get('/', function(req, res){
    return res.redirect("/teachers")
})

route.get('/teachers', function(req, res){
    return res.render("teachers/index")
})

route.get('/students', function(req, res){
    return res.render("students")
})
module.exports = route