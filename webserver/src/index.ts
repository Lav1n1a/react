import express, { Application } from 'express';
import cors from 'cors';
import getAllUsers from './routes/getAllUsers';
import createUserRouter from './routes/createUserRouter';
import getUser from './routes/getUser';

const app: Application = express();
app.use(express.json())
app.use(cors());


//Rotas
app.use(createUserRouter);
app.use(getUser);
app.use(getAllUsers);

app.listen(4007, () => console.log('Rodando na porta 4007'))

export default app