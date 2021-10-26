import { useState } from 'react'

import { useSelector } from 'react-redux';

function NoteList() {
    const items = useSelector(state => state.notes.items);

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => {
        setSearchTerm(event.target.value);
    }

    const results = !searchTerm
        ? items
        : items.filter(item =>
            item.note.toLowerCase().includes(searchTerm.toLocaleLowerCase())
    );


    return (
        <>
        <input className="filterBtn" placeholder="Search.." value={searchTerm} onChange={handleChange}/>
        <div className="flexContainer">
            {
                results.map((item) => (
                    <div key={item.id} className={item.boxBg}>{item.note}</div>
                ))
            }
        </div>
        </>
    )
}

export default NoteList
