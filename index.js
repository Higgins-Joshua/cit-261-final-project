const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended: true})
const PORT = process.env.PORT || 5000
const API_KEY = '8b847caf'
const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}&t=`

var app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/index', {apiUrl: API_URL}))

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))