import express from 'express'

//creating server
const app = express();

app.get('/', (req, res) => {
    res.send("<h1>Hello World, how's tricks? :-)</h1>")
})
//listen to some port
app.listen(8000, () => {
    console.log("listening");
});