var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/0819199500053', function(req, res, next) {
    var datos={"nombre":"Rosa Margarita Sandoval Velásquez",
                "Registro":0819199500053,
                "Correo":"sandorosa1@gmail.com"
              }
    res.json(datos);
});



router.get('/sumas', function(req, res, next) {
  res.render('suma', {"numeroUno":"","numeroDos":"","sumas":""});
});

var numerouno=[];
var numerodos=[];

router.post('/sumas', function(req, res, next) {
    console.log(req.body);
    numerouno.push(req.body.numeroUno);
    numerodos.push(req.body.numeroDos);
    var suma= parseInt(numerouno)+parseInt(numerodos);
    var objeto={};
    objeto.numeroUno=req.body.numeroUno;
    objeto.numeroDos=req.body.numeroDos;
    objeto.sumas=suma;
    res.render('suma',objeto);
});

module.exports = router;
