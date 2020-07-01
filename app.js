var bodyParser = require('body-parser');
var app = require('express')();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var httpserver =  require('./httpserver');
var server = httpserver.init(app);

server.listen(9090, function () {
    console.log(`app listening on port 9090`)
});

var wines = [
    {id:1, name: "Gato Negro", type:"Merlot", price:35.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"},
    {id:2, name: "Gato Branco", type:"Cabernet", price:45.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"},
    {id:3, name: "Gato Azul", type:"Sauvignon", price:55.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"},
    {id:4, name: "Gato Pardo", type:"Sangue de Boi", price:15.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"},
    {id:5, name: "Gato Gato", type:"Suco de uva", price:5.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"},
    {id:6, name: "Gato Gato", type:"Suco de uva", price:5.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"},
    {id:7, name: "Gato Gato", type:"Suco de uva", price:5.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"},
    {id:8, name: "Gato Gato", type:"Suco de uva", price:5.00, image: "https://static.carrefour.com.br/medias/sys_master/images/images/h99/h3c/h00/h00/9231026159646.jpg"}
]

app.get('/test', function (req, res) {
   
    res.send(wines);

})


app.get('/details', function (req, res) {
    let wineId = req.query.id;
    let wine = wines.find(element => element.id == wineId);
    console.log(req.query)
    console.log(wine)
    res.send(wine)
})