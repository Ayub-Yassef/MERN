import express from 'express';
import './db';

import noteRouter from "./routers/note";

//creating server
const app = express();

//parsing post request coming from the fetch.post() method
app.use(express.json());

//parsing post request from HTML form
app.use(express.urlencoded({ extended: false }));

/**
 * 
 * "localhost:8000/note/create"
"localhost:8000/note"
"localhost:8000/note/noteId"
"localhost:8000/note/noteId"
*/
app.use("/note", noteRouter);

//listening instruction set to port 8000
app.listen(8000, () => {
    console.log("listening alright hen! xx");
});