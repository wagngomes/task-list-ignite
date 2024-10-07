export class Database{

    #database = {}

    insertTask(data){
        this.#database.push(data)
        return res.writeHead(201).end()
    }

    listAllTasks(){

    }

    listTaskById(){

    }

    updateTask(){

    }

    updateStatusTask(){

    }

    deleteTaskById(){

    }

    


}