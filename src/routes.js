import Database from "./database.js"

const database = new Database()

const routesApp = [
    {
        method: 'POST',
        url: '/task',
        handler: (req, res) => {

            const { title, description } = req.body

            const data = {
                title,
                description
            }
            console.log(data)

            const newTask = database.createTask(data)
            return newTask
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

export default routesApp
