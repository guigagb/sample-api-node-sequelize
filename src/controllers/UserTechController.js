const Tech = require('../models/Tech')
const User = require('../models/User')

module.exports = {

    async index(req, res) {

        const { user_id } = req.params

        const user = await User.findByPk(user_id)

        if (!user)
            return res.status(404).json('Usuário não encontrado.')

        const userTech = await user.getTechs()

        return res.json(userTech)

    },

    async store(req, res) {

        const { user_id } = req.params
        const { tech_id } = req.body

        const user = await User.findByPk(user_id)

        if (!user)
            return res.status(404).json('Usuário não encontrado.')

        const tech = await Tech.findByPk(tech_id)

        if (!tech)
            return res.status(404).json('Tech não encontrada.')

        let userTech = await user.getTechs({ where: { id: tech_id } })

        if (userTech.length > 0)
            return res.status(404).json('Tecnologia já cadastrada neste usuário.')

        userTech = await user.addTech(tech)

        return res.json(userTech)

    },

    async delete(req, res) {
        const { user_id, tech_id } = req.params

        const user = await User.findByPk(user_id)

        if (!user)
            return res.status(404).json('Usuário não encontrado.')

        const tech = await Tech.findByPk(tech_id)

        if (!tech)
            return res.status(404).json('Tech não encontrada.')

        let userTech = await user.getTechs({ where: { id: tech_id } })

        if (userTech.length == 0)
            return res.status(404).json('Tecnologia não cadastrada neste usuário.')

        userTech = await user.removeTech(tech)

        return res.json({ deleted: 'deleted' })

    }
}

