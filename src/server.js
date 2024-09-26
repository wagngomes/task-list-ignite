import http from 'node:http'

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === "/task"){
        return res.end('application.on')
    }


})

server
    .listen(3000)
    .on('listening', () => {
        console.log('server on')
    })