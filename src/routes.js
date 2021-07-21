const express = require('express');
const AddressController = require('./controllers/AddressController');
const ReportController = require('./controllers/ReportController');
const TechController = require('./controllers/TechController');
const UserController = require('./controllers/UserController');
const UserTechController = require('./controllers/UserTechController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ hello: 'world' })
})

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)

routes.get('/users/:user_id/addresses', AddressController.index)
routes.post('/users/:user_id/addresses', AddressController.store)

routes.get('/techs', TechController.index)
routes.post('/techs', TechController.store)

routes.get('/users/:user_id/techs', UserTechController.index)
routes.post('/users/:user_id/techs', UserTechController.store)
routes.delete('/users/:user_id/techs/:tech_id', UserTechController.delete)

routes.get('/report', ReportController.show)

module.exports = routes