const { Person, Profession } = require('../models');

module.exports = {

    async index (req, res) {
        try {

            const people = await Person.findAll({ include: [{ model: Profession }] });

            if (people) {
                return res.send({ data: people, msg: "Consulta realizada com sucesso." });
            } else {
                return res.send({ data: people, msg: "Nenhum resultado encontrado." });
            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }
    },

    async show (req, res) {
        try {
            
            const person = await Person.findOne({ where: { id: req.params.id}, include: [{ model: Profession }] });
            
            if (person) {
                return res.send({ data: person, msg: "Pessoa retornada com sucesso." });
            } else {
                return res.status(400).send({ error: "Pessoa não encontrada." });
            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }
    },

    async store (req, res) {
        try {

            const profession = await Profession.findOne({ where: { id: req.body.profession } });

            if (!profession) {
                return res.status(400).send({ error: "Profissão não encontrada." });
            }

            const person = await Person.create(req.body);
            
            if (person) {     
                return res.send({ data: person, msg: "Pessoa gravada com sucesso." });
            } else {
                return res.status(400).send({ error: "Não foi possível gravar a pessoa." });
            }
        } catch (err) {
            return res.status(500).send({ error: err });
        }
    },

    async update (req, res) {
        try {

            const { first_name, last_name, salary, profession: professionId } = req.body;
            
            const profession = await Profession.findOne({ where: { id: professionId } });
            
            if (! profession) {
                return res.status(400).send({ error: "Profissão não encontrada." });
            }
            
            const person = await Person.findOne({ where: { id: req.params.id } });
            
            if (person) {

                await person.update({
                    first_name,
                    last_name,
                    salary,
                    profession: professionId
                });

                return res.send({ data: person, msg: "Pessoa alterada com sucesso." });
            } else {

                return res.status(400).send({ error: "Pessoa não encontrada." });

            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }
    }, 

    async destroy (req, res) {
        try {
            
            const person = await Person.findOne({ where: { id: req.params.id} });
            
            if (person) {

                await person.destroy();

                people = await Person.findAll({ include: [{ model: Profession }] });                

                return res.send({ data: people, msg: "Pessoa deletada com sucesso." });
            } else {
                return res.status(400).send({ error: "Pessoa não encontrada." });
            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }  
    }

};