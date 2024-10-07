import Database from "./database.js"

const database = new Database()

export const routesApp = [
    {
        method: 'POST',
        url: '/task',
        handler: (req, res) => {

            const { description } = req.body

            const data = {
                description
            }
            console.log(data)

            //const newTask = database.createTask(data)
            return res.writeHead(201).end()
        }
    },

    {
        method: 'GET',
        url: '/task',
        handler: (req, res) => {
            return res.end('application.on')
        }
    },

    {
        method: 'PUT',
        url: '/task/:id',
        handler: (req, res) => {
            return res.end('application.on')
        }
    },

    {
        method: 'DELETE',
        url: '/task/:id',
        handler: (req, res) => {
            return res.end('application.on')
        }
    },

    {
        method: 'PATH',
        url: '/task/:id/complete',
        handler: (req, res) => {
            return res.end('application.on')
        }
    }


]
