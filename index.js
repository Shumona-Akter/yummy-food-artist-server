const express = require('express')
const app = express()
const port = 3000
var cors = require('cors')

const detailsData = require("./data/chefDetails.json")

app.use(cors())
const chefData = require('./data/chefData.json')
app.get('/', (req, res) => {
  res.send(chefData)
})

app.get('/chef', (req, res) => {
  res.send(detailsData)
})



app.get('/chef/:id', (req, res) =>{
  const id = parseInt(req.params.id)
  const details = detailsData.find(n=> parseInt(n.id) === id)
  res.send(details)
  // res.send(detailsData)
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})