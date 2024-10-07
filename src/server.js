import http from 'node:http'
import routesApp from './routes.js'
import { json } from './middlewares/json.js'

const server = http.createServer(async(req, res) => {
    const { method, url } = req

    await json(req, res)

    const route = routesApp.find(route => route.method === method && route.path === url)


    console.log(route)

    if (route){
        route.handler(req, res)
    }

    return res.end()
})

server
    .listen(3000)
    .on('listening', () => {
        console.log('server on')
    })