const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'Application/json' });

        let salida = {
            nombre: 'Daniel',
            edad: 52,
            url: req.url
        }
        res.write(JSON.stringify(salida));
        // res.write('HOLA MUNDO !!!')
        res.end();
    })
    .listen(8081);

console.log('Escuchando x puerto 8081');