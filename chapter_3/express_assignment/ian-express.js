const express = require('express'),
app = express();
// you can call the html file as index.html, then you can access localhost:8080 and it will automatically show your page without a rout defined

app.use(express.static('subdirectory',{maxage: '2d'}));
// another way is to const two_day =17450000

app.get('/joke', (req, res)=>{
    // res.setHeader()  can be used to control many headers, headers are name: value pairs
    res.setHeader('cache-control', "public, max-age=31536000")
    // res.setHeader('authorization', 'public, max-age:17653538')
    res.sendFile(__dirname + '/joke.html')
})




app.listen(8080, ()=>{
    // write stuff to do when the server starts
})

// middleware - do some function with the resquest before the request continues to get something

function middleware(req, res,next){
console.log(req.path, 'received at', date.now());
// kind of like return
next()

}

app.get('/joke',middleware,(req,res)=>{
    res.sendFile
})