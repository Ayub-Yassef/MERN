import { RequestHandler } from 'express';
import Note, { NoteDocument } from '../models/note'

export interface IncomingBody {
    title: string;
    description?: string;
}

export const create: RequestHandler = async (req, res) => {
    // const newNote = new Note<NoteDocument>({
    //     title: (req.body as IncomingBody).title,
    //     description: (req.body as IncomingBody).description,
    // });
    
    // await newNote.save();

    await Note.create<NoteDocument>({
        title: (req.body as IncomingBody).title,
        description: (req.body as IncomingBody).description,
    });

    res.json({ message: "I am listening to create." });
};

export const updateSingleNote: RequestHandler = async (req, res) => {
    const { noteId } = req.params;
    const { title, description } = req.body as IncomingBody;
    const note = await Note.findByIdAndUpdate(
        noteId,
        { title, description },
        { new: true }
    );
    if (!note) return res.json({ error: "Nae note here wee lamb :("});
    await note.save();
    res.json({ note });
};

export const removeSingleNote: RequestHandler = async (req, res) => {
    const { noteId } = req.params;
    const removedNote = await Note.findByIdAndRemove(noteId);
    if (!removedNote) return res.json({ error: "Unable to remove note hun, soz. xx" });
    res.json({ message: "Note removed perfectly darling! xx"});
};

export const getAllNotes: RequestHandler = async (req, res) => {
    const notes = await Note.find();
    res.json({ notes });
};

export const getSingleNote: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findById(id);
    if (!note) return res.json({ error: "Nae note found hen. xx" });
    res.json({ note });
};
