import { useState } from 'react'
import { nanoid } from 'nanoid';

import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';



function Form() {
    const [note, setNote] = useState('');
    const [boxBg, setBoxBg] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(note.length > 0) {
            dispatch(addNote({ id: nanoid(), note , boxBg: boxBg}));
        }

        setNote('');
    };

    return (
        <div>
            <form className="container" onSubmit={handleSubmit}>
                <textarea placeholder="Enter your note here.." className="styled" value={note} onChange={(e) => setNote(e.target.value)}/>
                <button className="addBtn">Add</button>
                <div className="colorPicker">
                    <button className="boxBg1" onClick={() => setBoxBg('boxBg1')}/>
                    <button className="boxBg2" onClick={() => setBoxBg('boxBg2')}/>
                    <button className="boxBg3" onClick={() => setBoxBg('boxBg3')}/>
                    <button className="boxBg4" onClick={() => setBoxBg('boxBg4')}/>
                </div>
            </form>
        </div>
    )
}

export default Form
