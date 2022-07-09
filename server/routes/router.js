const express = require("express");

const services = require('../services/render');

const route = express.Router;

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

module.exports = route;