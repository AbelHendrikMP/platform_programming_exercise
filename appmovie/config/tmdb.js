require('dotenv').config()
const axios = require('axios')
const tmdb = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    headers:{
    Accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDUyYmY5ZTE1MzkwNjQ5ODVkMmYxYWFmMjU1MzhlYSIsIm5iZiI6MTczNTc5MDQxOS4wNjMsInN1YiI6IjY3NzYwZjUyMTk0YjU4MTZkNzYxNTBhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ztz-t_JQALeNoMuvz6rhqgOS_3jNvjN4yR_Ht4ZcG-g'
  }
})

module.exports = tmdb
