<<<<<<< HEAD
import { Database } from "./database.js"
import { randomUUID } from 'node:crypto'

const database = new Database()

const routesApp = [
=======
import Database from "./database.js"

const database = new Database()

export const routesApp = [
>>>>>>> 2298878ceb621bf50c170c8635a1614dfbf41d94
    {
        method: 'POST',
        path: '/task',
        handler: (req, res) => {

<<<<<<< HEAD
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
=======
            const { description } = req.body

            const data = {
                description
            }
            console.log(data)

            //const newTask = database.createTask(data)
            return res.writeHead(201).end()
>>>>>>> 2298878ceb621bf50c170c8635a1614dfbf41d94
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
