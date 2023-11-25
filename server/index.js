import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import agriRoutes from './routes/agri.route.js';

dotenv.config();
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/auth', userRoutes);
app.use('/agri', agriRoutes)


app.listen(5001, () => {
    console.log('Server is listening on port 5001');
});