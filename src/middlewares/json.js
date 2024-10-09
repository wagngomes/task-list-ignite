export async function json(req, res) {

    const buffers = []

<<<<<<< HEAD
    for await (const chunk of req){

=======
    for await (const chunk of req) {
>>>>>>> 2298878ceb621bf50c170c8635a1614dfbf41d94
        buffers.push(chunk)
    }

    try{
<<<<<<< HEAD

        req.body = JSON.parse(Buffer.concat(buffers).toString())

    }catch{

        req.body = null
    }

    res.setHeader('content-type', 'application/json')
=======
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    }catch{
        req.body = null
    }


    res.setHeader('content-type', 'application/json')

>>>>>>> 2298878ceb621bf50c170c8635a1614dfbf41d94
}