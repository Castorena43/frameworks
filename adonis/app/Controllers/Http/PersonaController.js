'use strict'
const Persona = use('App/Models/Persona')

class PersonaController {

    async all({response}){
        const people = await Persona.all()
        
        return response.status(200).json(people)
    }

    async create({request,response}){
        const data = request.only(['name', 'email'])
        const people = new Persona()
        people.name = data.name
        people.email = data.email
        
        if(await people.save()){
            return response.status(201).json(people)
        }
        return response.status(400).json(people)
    }
}

module.exports = PersonaController
