const express = require("express");

const services = require('../services/render');

const route = express.Router();
const controller = require("../controller/controller");

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);


/**
 *  @description add_user 
 *  @method POST /
 */
route.get('/add-user', services.add_user);


/**
 *  @description update_user 
 *  @method UPDATE /
 */
route.get('/update-user', services.update_user);

// --------------------------------------------------
// API for this application {{
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);
// }}
// --------------------------------------------------

module.exports = route;