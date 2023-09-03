import express from 'express';
import userRoutes from './routers/user';

const app = express();   //Intialising the application with expresss framework

app.use('/user', userRoutes);


app.listen(process.env.PORT);

//yarn add --dev nodemon ----> Downloads the dependency for development purposes only here nodemon