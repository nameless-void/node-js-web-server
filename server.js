const http = require('http')

const PORT = 4000

const responseDataJSON = () => {
    const data = [{
        nodeJS: '20.5',
    }]

    return JSON.stringify(data)
}

const server = http.createServer((req, res) => {
    console.log('Server accept request');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/'){
        res.end(responseDataJSON())
    }
    
    res.end();
});


server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`Server listen port ${PORT}...`);
});
