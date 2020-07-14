module.exports = {
    age: function age(timestamp){
        const today = new Date()
        const birthday = new Date(timestamp)

        let age = today.getFullYear() - birthday.getFullYear()
        const month = today.getMonth() - birthday.getMonth()

        if(month < 0 || month == 0 && today.getDate() <= birthday.getDate()){
            age = age -1
        }

        return age
    },

    graduation: function graduation(grad){
        
        if(grad == "EMC"){
            grad = "Ensino Médio Completo"
        }else if( grad == "ESC"){
            grad = "Ensino Superior Completo"
        }else if( grad == "M"){
            grad = "Mestrado"
        }else{
            grad = "Doutorado"
        }
        return grad
    },

    date: function date(timestamp){
        const date = new Date(timestamp)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    }

}