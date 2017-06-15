const express = require('express');
const { User, Card, List, Board} = require('./../controllers');
const { getJWTMiddleware, authenticateMiddleware } = require('./authMiddleware');
const routes = express.Router();

routes.get('/', getJWTMiddleware, authenticateMiddleware, (req, res) => {
    if (!req.user) {
        return res.redirect('/api/holi');
    }
    res.send(req.user);
});

routes.get('/holi', (req, res) => {
    res.json({ "holi": "holi" });
});

routes.get('/users', User.getAll);
routes.post('/signup', User.signup);
routes.post('/signin', User.signin);
routes.post('/authenticate', getJWTMiddleware, authenticateMiddleware, User.reAuthenticate);

routes.get('/cards', Card.getAll);
routes.get('/lists', List.getAll);
routes.get('/boards', Board.getAll);

module.exports = routes;