<<<<<<< HEAD
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
=======
import DBTASK from "./db.js"

class Database {

    createTask(data){
        DBTASK.push(data)
    }



}

export default Database
>>>>>>> 2298878ceb621bf50c170c8635a1614dfbf41d94
