const express = require('express');
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('My smarty Node project.I am code with node second time.I am so excited')
})

const users = [
    {id:1, name:'Sabana', email:'sabana@gamil.com', phone:'01788888000'},
    {id:2, name:'Shabnoor', email:'shabnoor@gamil.com', phone:'01788888000'},
    {id:3, name:'Suchorita', email:'suchorita@gamil.com', phone:'01788888000'},
    {id:4, name:'Suchonda', email:'suchonda@gamil.com', phone:'01788888000'},
    {id:5, name:'Srabonti', email:'srabonti@gamil.com', phone:'01788888000'},
    {id:6, name:'Sabila', email:'sabila@gamil.com', phone:'01788888000'},
    {id:7, name:'Sohana', email:'sohana@gamil.com', phone:'01788888000'}
]

app.get('/users',(req,res)=>{
    // filter by query parameter
    if( req.query.name){
        const search = req.query.name.toLowerCase()
        const matched = users.filter(user => user.name.toLowerCase().includes(search))
        res.send(matched)
    }else{
        res.send(users)
    }
})

app.get('/user/:id',(req,res)=>{
    console.log(req.params)
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    res.send(user)
})

app.get('/fruits', (req,res) =>{
    res.send(['mango','apple','oranges','apple'])
})

app.get('/fruits/mango/fazle',(req,res)=>{
    res.send('sour sour fazle flavor')
})

app.post('/user',(req,res)=>{
    const user = req.body;
    user.id = users.length + 1;
    users.push(user)
    res.send(user)
})

app.listen(port,()=>{
    console.log('Listing to port',port)
})