import DBTASK from "./db.js"

class Database {

    createTask(data){
        DBTASK.push(data)
    }



}

export default Database