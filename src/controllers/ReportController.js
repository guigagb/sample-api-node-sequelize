const { Op } = require("sequelize");
const User = require('../models/User')

module.exports = {

    async show(req, res) {

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%gmail.com'
                }
            },
            include: [
                { association: 'addresses', where: { street: 'QN 26' } }, // relacionamento endereço
                {
                    association: 'techs',
                    required: false,
                    where: {
                        name: {
                            [Op.iLike]: 'vu%'
                        }
                    }
                } // relacionamento tecnologias
            ]
        })

        return res.json(users)

    },

}

