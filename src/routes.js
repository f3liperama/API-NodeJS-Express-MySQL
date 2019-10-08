const routes = require('express').Router();


const ProfessionController = require('./app/controllers/professionController');
const PersonController = require('./app/controllers/personController');

routes.get('/professions', ProfessionController.index);
routes.get('/professions/:id', ProfessionController.show);
routes.post('/professions', ProfessionController.store);
routes.put('/professions/:id', ProfessionController.update);
routes.delete('/professions/:id', ProfessionController.destroy);

routes.get('/people', PersonController.index);
routes.get('/people/:id', PersonController.show);
routes.post('/people', PersonController.store);
routes.put('/people/:id', PersonController.update);
routes.delete('/people/:id', PersonController.destroy);

module.exports = routes;