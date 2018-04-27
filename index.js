const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// const busboy = require('busboy');


// app.use(bodyParser.urlencoded({
//     extended: false
// }))

app.use(bodyParser.json());

app.route('/').get((req,res,next)=>{
    console.log("entre en el get");
    res.json("Se ha hecho una petición get")
});

app.route('/').post(function(req, res, next) {
    console.log("entre en el post");
    res.json("Hice una petición post") 
});

app.listen(3000, (err) => {
 console.log('Servidor listo en el puerto 3000');
});