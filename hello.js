import express from 'express' // or const express = require('express')
const app = express()
const port = 3000

//  http://localhost:3000
app.get('/', (req, res) => {
    res.send('hello world')
})

//  http://localhost:3000/home
app.get('/home', (req, res) => {
    res.send(`<h1>Hello world</h1>`)  // use  html 
})

var htmlTemplate = `<h1 style="color:red">Home</h1>
                      <p>use html template</p>`

//  http://localhost:3000/template
app.get('/template',(req,res)=>{
    res.send(htmlTemplate)
}) 
app.listen(port, () => { console.log(`server start at ${port}`) })
// http://localhost:3000 on your browser