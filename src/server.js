import http from 'node:http'
import { routesApp } from './routes.js'
import { json } from './middlewares/Json.js'

const server = http.createServer(async(req, res) => {


    const { method, url } = req

    await json(req, res)

    const route = routesApp.find(route => route.method === method && route.url === url)

    console.log(route)
  

    if (route){

       return route.handler(req, res)
    }

    return res.end('rota não encontrada')
})

server
    .listen(3000)
    .on('listening', () => {
        console.log('server on')
    })