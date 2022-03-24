const Users = require('../application/users_service');
const Utils = require('../utils/utils');

const route = '/users';

module.exports = (app) => {
    app.post(`${route}/create`, async (req, res) => {
        const response = await Users.create(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
    app.put(`${route}/update`, async (req, res) => {
        const response = await Users.update(req.body);
        res.status(Utils.responseStatus(response.name));
        res.json(response);
    });
};