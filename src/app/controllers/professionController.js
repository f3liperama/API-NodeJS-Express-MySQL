const { Profession } = require('../models');


module.exports = {

    async index (req, res) {
        try {

            const professions = await Profession.findAll();

            if (professions) {
                return res.send({ data: professions, msg: "Consulta realizada com sucesso." });
            } else {
                return res.send({ data: professions, msg: "Nenhum resultado encontrado." });
            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }
    },

    async show (req, res) {
        try {
            
            const profession = await Profession.findOne({ where: { id: req.params.id} });
            
            if (profession) {
                return res.send({ data: profession, msg: "Profissão retornada com sucesso." });
            } else {

                return res.status(400).send({ error: "Profissão não encontrada." });

            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }
    },
    
    async store (req, res) {
        try {
            const profession = await Profession.create(req.body);

            if (profession) {     
                return res.send({ data: profession, msg: "Profissão gravada com sucesso." });
            } else {
                return res.status(400).send({ error: "Não foi possível gravar a profissão." });
            }
        } catch (err) {
            return res.status(500).send({ error: err });
        }
    },

    async update (req, res) {        
        try {

            const { description } = req.body;
            
            const profession = await Profession.findOne({ where: { id: req.params.id} });
            
            if (profession) {

                await profession.update({
                    description
                });

                return res.send({ data: profession, msg: "Profissão alterada com sucesso." });
            } else {

                return res.status(400).send({ error: "Profissão não encontrada." });

            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }
    },

    async destroy (req, res) {
        try {
            
            const profession = await Profession.findOne({ where: { id: req.params.id} });
            
            if (profession) {

                await profession.destroy();

                professions = await Profession.findAll();                

                return res.send({ data: professions, msg: "Profissão deletada com sucesso." });
            } else {
                return res.status(400).send({ error: "Profissão não encontrada." });
            }

        } catch (err) {
            return res.status(500).send({ error: err });
        }        
    }

};


