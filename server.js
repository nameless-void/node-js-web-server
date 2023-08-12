const http = require('http');
const fs = require('fs');
const path = require('path');
const pid = process.pid;

const PORT = 4000;

http.createServer((req, res) => {
    console.log('Server is running...');

    res.setHeader('Content-Type', 'text/html');

    const createPath = (page) => path.resolve(__dirname, 'views', `${page}.html`);

    switch(req.url) {
        case '/':
            basePath = createPath('index');
            break;
        default:
            basePath = createPath('404');
            break;
    }

    fs.readFile(basePath, (err, data) => {
        if (err){
            console.log(err);
            res.end();
        }
        res.write(data);
        res.end();
    })

}).listen(PORT, () => {
    console.log(`Server started on port: ${PORT}. Process ID: ${pid}`);
})
