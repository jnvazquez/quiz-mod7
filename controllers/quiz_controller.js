// GET /quizes/question
exports.question = function(req, res) {
    res.render('quizes/question', {pregunta: 'Capital de Italia'});
};

//GET /quizes/answer
exports.answer = function (req, res) {
    if (req.query.respuesta === 'Roma') {
        res.render('quizes/answer', {respuesta: 'Correcto'});
    } else {
        res.render('quizes/answer', {respuesta: 'Incorrecto'});
    }
};

// GET /author
exports.author = function(req, res) {
    var data = [];
    var autor = new Object;
    autor['nombre'] = 'Jorge Navarro';
    autor['imagen'] = '/images/author_1.png';
    data.push(autor);
    res.render('author', {autores: data});
};