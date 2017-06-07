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

module.exports = router;
