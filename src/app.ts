import express from 'express';
import ConnectionToDatabase from '../db/connection.js';
import { start } from 'repl';
import movieRouter from '../Router/movieRouter/index.js';
import bodyParser from 'body-parser';
import directorRouter from '../Router/directorRouter/index.js';
import signup from '../Router/userCreate.js';
import login from '../Router/userLogin.js';
import { log } from 'console';
import apiSecretKey from '../config.js';
import verifyToken from '../Router/verifyToken.js';
export const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


const startServer = async () => {
    try {
        //mongoDB bağlantısı başlat
        await ConnectionToDatabase();

        //bağlantı başarılı ise express sunucusunu başlat
        app.use('/api',verifyToken);
        app.use('/api',movieRouter);
        app.use('/api',directorRouter);
        app.use('/api',signup);
        app.use('/api',login);
        const port = process.env.PORT || 3000;
        app.listen(port,() => {
            console.log(`sunucu ${port} portunda calisiyor`);
        });
    } catch (error) {
        console.log('Hata: ' + error);
    }
}

startServer();
