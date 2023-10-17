const express = require('express')
const { readFile, writeFile } = require('fs/promises')
const app = express()
const port = 3000

app.get('/', async (req,res) => {
  res.statusCode = 200
  const html = await readFile('home.html')
  res.setHeader('content-type', 'text/html')
  res.write(html)
  res.end()
})

app.post('/kontakt', async (req,res) => {

})

app.listen(port, () => {
  console.log(`server listening at port ${port}`)
})