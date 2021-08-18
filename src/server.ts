import { router } from './routes/index';
import express, { json } from 'express';

const app = express();

app.use(express.json())
app.use(router)


app.listen(3000, ()=> {console.log("Server is running http://localhost:3000")})