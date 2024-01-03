// getting the http module
const http = require('http');

// the method to use (create server)
// the create Server method has a callback function
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end("Welcome to our homepage")
        
    }else if(req.url === '/about'){
        res.end('Here is our short history')

    }else{
        // setting a default response if the user is accessing a resource that doesn't exist
        res.end(`
            <h1>Oops!</h1>
            <p>We can't seem to find the page you are looking for.</p>
            <a href="/">back home</a>
        `)
    }
    
})

// making the server listen

server.listen(5000)