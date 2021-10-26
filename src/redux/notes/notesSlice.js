import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid'

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        items: [
            {
                id: nanoid(),
                note: 'Learn React',
                boxBg: 'boxBg1',
            },
            {
                id: nanoid(),
                note: 'Ride a bicycle',
                boxBg: 'boxBg2',
            },
            {
                id: nanoid(),
                note: 'Prepare lunch',
                boxBg: 'boxBg3',
            },
            {
                id: nanoid(),
                note: 'Do sports',
                boxBg: 'boxBg4',

            },
        ]
    },
    reducers: {
        addNote: (state, action) => {
            state.items.push(action.payload);
        },
    },
});

export const { addNote } = notesSlice.actions;
export default notesSlice.reducer;