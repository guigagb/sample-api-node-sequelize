const Tech = require('../models/Tech')

module.exports = {

    async index(req, res) {

        const techs = await Tech.findAll()

        return res.json(techs)

    },

    async store(req, res) {

        const { name } = req.body;

        let tech = await Tech.findOne({ where: { name } })

        if (tech)
            return res.status(400).json('Tech já cadastrada.')

        tech = await Tech.create({ name })

        return res.json(tech)

    }
}

