const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})
app.use('/public', express.static(__dirname + '/public'))
app.get('/kontakt', (req, res) => {
  res.render('kontakt')
})

app.listen(3000, () => {
  console.log('server running')
})
//pozyczone od Filipa Mikosza :)
