import express from 'express'
import os from 'os'

const app = express()
const PORT = 3000

app.get("/",(req,res) => {
    const helloMessage = `BIG BRAIN2,0 Hello from the ${os.hostname()}`
    console.log(helloMessage)
    res.send(helloMessage)
})

app.listen(PORT,() =>
    console.log(`Web Server is listening at port ${PORT}`)
)