const fs = require('fs')

const data = require("./data.json")

const {age, graduation, date} = require("./utils")

exports.post = function(req,res){

    const keys = Object.keys(req.body)

    let {avatar_url, name, birthday, education, typeClass,atuacion} = req.body

    for(key of keys){
        if(req.body[key]== ""){
            return res.send('Please, fill all fields!')
        }
    }

    birthday = Date.parse(birthday)
    const created_at = Date.now()

    const id = Number(data.teachers.length +1)

    data.teachers.push({
        id,
        avatar_url,
        created_at,
        name,
        birthday,
        education,
        typeClass,
        atuacion
    })

    fs.writeFile("data.json", JSON.stringify(data,null, 2), function(erro){
        if(erro){
            return res.send("Write file error")
        }
        return res.redirect("/teachers")
    })

    
}

exports.show = function(req,res){
    const {id} = req.params

    const foundTeacher =  data.teachers.find(function(teachers){
        return teachers.id == id
    })

    if(!foundTeacher) return res.send("Instructor not found")

    const teacher = {
        ... foundTeacher,
        birthday: age(foundTeacher.birthday),
        atuacion: foundTeacher.atuacion.split(","),
        education: graduation(foundTeacher.education),
        created_at: new Intl.DateTimeFormat('pt').format(foundTeacher.created_at)
    }

    return res.render("teachers/show", {teacher})
}

exports.edit = function(req,res){
    const {id} = req.params

    const foundTeacher =  data.teachers.find(function(teachers){
        return teachers.id == id
    })

    if(!foundTeacher) return res.send("Instructor not found")

    const teacher = {
        ... foundTeacher,
        birth: date(foundTeacher.birthday)
    }

    return res.render("teachers/edit", {teacher})

}