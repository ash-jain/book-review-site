import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

dotenv.config();
const app = express();

app.use(morgan('tiny'));
app.use(cors({ origin: 'https:/localhost' }));

app.get('/', (req, res) => {
    res.send("");
});

app.listen(process.env.PORT, () => { console.log(`Running on port ${process.env.PORT}`)});