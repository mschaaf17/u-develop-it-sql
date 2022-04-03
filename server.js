const express = require("express");

//create and run the port
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

//test server connection
app.get('/', (req, res)=> {
    res.json({
        message: 'Hello World'
    })
})

//default response for any other request (Not Found) should always be the last one
app.use((req, res) => {
    res.status(404).end()
})



//start the server on port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
