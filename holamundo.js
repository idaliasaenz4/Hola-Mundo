//llamamos el modulo http
const http = requiere('http');
//establecemos la url o IP de nuestro servidor
const hostname = '192.168.1.116';
//establecemos el puerto de escucha
const port = 3000;
//creamos una instancia HTTP con una reques y un response
const server = http.createServer((req,res)=>{
//el servidor respondera un codigo 200
res.statusCode = 200;
//e servidor respondera un codigo 200
res.setHeader('Content-Type','text/plain');
//el servidor respondera el mensaje hola mundo 
res.end('Hola Mundo\n');
});
server.listen(port,hostname, () => {
console.log('El servidor se esta ejecutando en http: //${hostname}:${port}/');
});