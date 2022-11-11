import express from 'express';
import router from './routes/diaries'
 const app = express();

app.use(express.json()) // middleware que transforma la req.body a un json

const PORT = 3000;


app.get('/ping',(_req,res)=>{
    console.log("someone pinged here! " + new Date().toLocaleDateString() );
    res.send('pong');
    console.log("No se lo que quieras"); 
    
});

app.use('/api/diaries',router)

app.listen(PORT, () => {
    console.log(`el servidor esta en el puerto ${PORT}`);
    
})