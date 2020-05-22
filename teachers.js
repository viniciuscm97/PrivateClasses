const fs = require('fs')

const data = require("./data.json")

exports.post = function(req,res){

    const keys = Object.keys(req.body)

    let {avatar_url, name, birthday, education, typeClass,atuacion} = req.body

    for(key of keys){
        if(req.body[key]== ""){
            return res.send('Please, fill all fields!')
        }
    }

    birthday = Date.parse(birthday)

    const id = Number(data.teachers.length +1)

    data.teachers.push({
        id,
        avatar_url,
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