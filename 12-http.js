const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end(`<h1>Welcome to our first node home page</h1>`)
    }
    if(req.url === '/about'){
        res.end(`
        <h1>Here is our About Page</h1>
        <a href="/">Back Home</a>
        `)

    }
    // res.write("Welcome to our first node home page")
    // res.end()
})
server.listen(5000)


// ****************https://nodeJS.dev website code for example***************
// const http = require('http');

// // const hostname = '127.0.0.1';
// // const port = 3000;

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Hello World\n');
//     }
//     if(req.url === '/about'){
//         res.end('This is our About page')
//     }
// });

// server.listen(5000);
