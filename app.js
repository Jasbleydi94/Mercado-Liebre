const express = require('express');
const path = require('path');

const app = express();

const publicFolderPath = path.resolve(__dirname, './public');

app.use( express.static(publicFolderPath));

const port = 3000;

app.listen(port, ()=>(console.log("Servidor escuchando en el puerto", port)));

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})
