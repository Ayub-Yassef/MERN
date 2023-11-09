import express from 'express'
import './db'

//creating server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ message: "I am listening!" });
});
//listen to port
app.listen(8000, () => {
    console.log("listening");
});