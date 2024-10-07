import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'

const database = new Database()

const routesApp = [
    {
        method: 'POST',
        path: '/task',
        handler: (req, res) => {

           const { title, description, completed_at, created_at, updated_at } = req.body

           const data = {
            id: randomUUID(),
            title,
            description,
            completed_at,
            created_at,
            updated_at
           }
            console.log(data)
            //database.insertTask(data)
            return data
        }
    },

    {
        method: 'GET',
        path: '/task',
        handler: (req, res) => {
            return res.end('application.on')
        }
    },

    {
        method: 'PUT',
        path: '/task/:id',
        handler: (req, res) => {
            return res.end('application.on')
        }
    },

    {
        method: 'DELETE',
        path: '/task/:id',
        handler: (req, res) => {
            return res.end('application.on')
        }
    },

    {
        method: 'PATH',
        path: '/task/:id/complete',
        handler: (req, res) => {
            return res.end('application.on')
        }
    }


]

export default routesApp
