const express = require('express')
const router = express.Router()
const uuidv1 = require('uuid/v1')

let movies = [
  {
    id: uuidv1(),
    title: "Batman Returns",
    description: "Michael Keaton stars in this German expresionist version of the caped crusader.",
    genre: "Superhero",
    posterURL: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_.jpg"
  },
  {
    id: uuidv1(),
    title: "Happy Gilmore",
    description: "Adam Sandler plays golf as hockey.",
    genre: "Comedy",
    posterURL: "https://images-na.ssl-images-amazon.com/images/I/71R%2B1eWrMXL._SY741_.jpg"
  },
  {
    id: uuidv1(),
    title: "Waterboy",
    description: "Adam Sandler plays an offensive character.",
    genre: "Comedy",
    posterURL: "https://images-na.ssl-images-amazon.com/images/I/41MgNU7v%2BqL.jpg"
  },
  {
    id: uuidv1(),
    title: "Iron Man",
    description: "Tony Stark, am I right?",
    genre: "Superhero",
    posterURL: "https://images-na.ssl-images-amazon.com/images/I/41gUfwMOofL.jpg"
  }
]

router.get('/', (req, res) => {
  res.render('index', {movies: movies})
})

router.post('/', (req, res) => {
  let title = req.body.title
  let description = req.body.description
  let genre = req.body.genre
  let posterURL = req.body.posterURL

  let movie = {
    id: uuidv1(),
    title: title,
    description: description,
    genre: genre,
    posterURL: posterURL
  }
  movies.push(movie)
  res.redirect('/movies')
})

router.post('/delete-movie', (req, res) => {
  let id = req.body.id
  movies = movies.filter(function(movie){
    return movie.id != id
  })
  res.redirect('/movies')
})

router.get('/id/:id', (req, res) => {
  let id = req.params.id
  let movieDescription = movies.filter(function(movie){
    return movie.id == id
  })
  res.render('movie-description', {movie: movieDescription})
})

router.get('/genre/:genre', (req, res) =>{
  let genre = req.params.genre
  let genreMovies = movies.filter(function(movie){
    return movie.genre == genre
  })
  res.render('index', {movies: genreMovies})
})

router.post('/search', (req, res) => {
  let genre = req.body.genre
  res.redirect(`/movies/genre/${genre}`)
})

router.get('/api/moviehes', (req,res) => {
  res.render('index', {movies: movies})
})

module.exports = router
