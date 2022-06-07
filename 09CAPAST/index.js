/* 
npm init --y
npm i express
tsc install
ts */
import express from 'express'

const app = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.json({
        msg:'ok'
    })
})

app.listen(port, ()=>{
    console.log(`prueba funcionando`);
})