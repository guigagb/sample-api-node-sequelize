const Address = require('../models/Address')
const User = require('../models/User')

module.exports = {

    async index(req, res) {

        const { user_id } = req.params;

        const user = await User.findByPk(user_id, { include: { association: 'addresses' } })

        if (!user)
            return res.status(404).json({ error: 'user not found' })

        return res.json(user.addresses)

    },

    async store(req, res) {

        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id)

        if (!user)
            return res.status(404).json({ error: 'user not found' })

        const address = await Address.create({ user_id, zipcode, street, number })

        return res.json(address)

    }
}

