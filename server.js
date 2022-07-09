const express = require("express");

const App = express();

App.get('/', (req,res) => {
    res.send('CRUD application')
})

const PORT = 3000;
App.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});