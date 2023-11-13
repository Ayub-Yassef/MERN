import express from 'express';
import './db';
import Note from './models/note'

//creating server
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/', (req, res) => {
    console.log(req.body)
    res.json({ message: "I am listening." });
});

app.post('/create', async (req, res) => {
    const newNote = new Note({title: req.body.title, description: req.body.description});
    await newNote.save();
    res.json({ message: "I am listening to create." });
});

//listen to port
app.listen(8000, () => {
    console.log("listening");
});

app.patch("/:noteId", async (req, res) => {
    const { noteId } = req.params;
    const note = await Note.findById(noteId);
    if (!note) return res.json({ error: "Note not found!" });

    const { title, description } = req.body as IncomingBody;
    if (title) note.title = title;
    if (description) note.description = description;

    await note.save();

    res.json ({ note });
});