import Note, { NoteDocument } from '../models/note'

const create = async (req, res) => {
    const newNote = new Note<NoteDocument>({
        title: (req.body as IncomingBody).title,
        description: (req.body as IncomingBody).description,
    });
    
    await newNote.save();

    await Note.create<NoteDocument>
    res.json({ message: "I am listening to create." });
});