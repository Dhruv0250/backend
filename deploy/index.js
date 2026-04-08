require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login',(req , res)=>{
    res.send('<h1>please login at website</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("welcome to youtube")
})

app.use((req, res) => {
  res.status(404).send('Page not found');
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
