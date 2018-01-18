const express = require('express');
const app = express(); 
const fs = require('fs');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'))

app.get('/countries/:id', function(req,res){
	fs.readFile('./countries.json', 'utf-8', function(err,data){
		let countries = JSON.parse(data);
		let country = req.params.id.toUpperCase();

		//console.log(countries[country].population)
		res.render('main', {countries: countries, country: country})
	})
	
})

app.get('/profile/:id', function(req,res){
	res.send('You requested to see the profile of user: ' + req.params.id)

})

app.listen(3000, function(){
	console.log('Listening to port 3000..')
})