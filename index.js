const express = require('express')
const app = express()
const port = 3000

const chefData = require('./data/chefData.json')
app.get('/', (req, res) => {
  res.send(chefData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})