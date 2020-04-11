const express = require('express');
const routes = express.Router();
const OngController = require('./controller/OngController');
const IncidentController = require('./controller/IncidentController');
const ProfileController = require('./controller/ProfileController');
const SessionController = require('./controller/SessionController');

routes.post('/session', SessionController.create);

routes.get('/ongs', OngController.get);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.get);

routes.get('/incidents', IncidentController.get)
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;