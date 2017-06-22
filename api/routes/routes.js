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
routes.get('/user/boards/:id', User.getBoards);
routes.post('/user/boards/:id', User.setBoards);
routes.post('/signup', User.signup);
routes.post('/signin', User.signin);
routes.post('/authenticate', getJWTMiddleware, authenticateMiddleware, User.reAuthenticate);

routes.get('/cards', Card.getAll);
routes.post('/cards', Card.add);
routes.put('/cards/:id', Card.update);
routes.delete('/cards/:id', Card.del);

routes.get('/lists', List.getAll);
routes.get('/lists/:id', List.getFromBoard);
routes.post('/lists', List.add);
routes.put('/lists/:id', List.update);
routes.delete('/lists/:id', List.del);

//routes.get('/boards', Board.getAll);
routes.get('/boards/:id', Board.get);
routes.post('/boards', Board.add);
routes.put('/boards/:id', Board.update);
routes.delete('/boards/:id', Board.del);

module.exports = routes;