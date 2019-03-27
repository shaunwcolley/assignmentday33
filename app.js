const express = require('express')
const bodyParser = require('body-parser')
const mustacheExpress = require('mustache-express')
const path = require('path')
const app = express()
const VIEWS_PATH = path.join(__dirname, '/views')
const movieRoutes = require('./routes/movies')

app.use(bodyParser.urlencoded({ extended: false }))
app.use('/css/', express.static('css'))
app.use('/movies', movieRoutes)

app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials'))

app.set('views', './views')
app.set('view engine', 'mustache')

app.listen(3000, function(){
  console.log("Serving first volley....")
})
