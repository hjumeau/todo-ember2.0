/*jshint node:true*/
var id = 0;
module.exports = function (app) {
    var express = require('express');
    var todosRouter = express.Router();

    todosRouter.get('/', function (req, res) {
        res.send({
            'data': []
        });
    });

    todosRouter.post('/', function (req, res) {
        res.send({
            'data': {
                id: ++id,
                type:'todo'
            }
        });
    });

    todosRouter.get('/:id', function (req, res) {
        res.send({
            'data': {
                id: req.params.id,
                type:'todo'
            }
        });
    });

    todosRouter.patch('/:id', function (req, res) {
        res.send({
            'data': {
                id: req.params.id,
                type:'todo'
            }
        });
    });

    todosRouter.delete('/:id', function (req, res) {
        res.status(204).end();
    });

    // The POST and PUT call will not contain a request body
    // because the body-parser is not included by default.
    // To use req.body, run:

    //    npm install --save-dev body-parser

    // After installing, you need to `use` the body-parser for
    // this mock uncommenting the following line:
    //
    //app.use('/api/todos', require('body-parser').json());
    app.use('/api/todos', todosRouter);
};
