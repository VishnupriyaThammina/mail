// built in middle ware express
const express = require('express');
const app = express();
// require express and start your server
const PORT = process.env.PORT||3000;

app.get('/',(req,res)=>{
    res.send('Server is booming')
})

app.listen(PORT,()=>{
    console.log(`Server is booming on PORT ${PORT}`)
})