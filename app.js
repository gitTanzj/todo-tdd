const express = require('express')
const todoRoutes = require('./routes/todo.routes')
const app = express()
const mongodb = require('./mongodb/mongodb.connect');

mongodb.connect();

app.use(express.json())

app.use('/todos', todoRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use((error, req, res, next) => {
    //console.log(error)
    res.status(500).json({ message: error.message });
})


// app.listen(3015, () => {
//     console.log('Server is running on http://localhost:3015')
// })

module.exports = app