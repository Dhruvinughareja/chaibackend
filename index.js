require('dotenv').config()
 
const express = require('express')
const app = express()
const port = 80

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/wifi',(req,res) => {
    res.send('iam dhruvin ughareja')
})
app.get('/login',(req,res) => {
    res.send('<h1>hellohy</h1>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})