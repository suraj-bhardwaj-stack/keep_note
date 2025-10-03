import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar';
import { Fragment, useEffect } from 'react';
import { useNotes } from '../../Context/Notes-Context';
import NotesCard from '../../Components/NoteCard/NotesCard';

function Home() {
    const { title, text, notes, isPinned, notesDispatch } = useNotes();
    const OnTitleChange = (e) => {
        notesDispatch({
            type: 'TITLE',
            payload: e.target.value
        })
    }

    const OnTextChange = (e) => {
        notesDispatch({
            type: "TEXT",
            payload: e.target.value
        })
    }

    const AddNotes = () => {
        notesDispatch({
            type: "ADD_NOTES"
        })

    }

    useEffect(() => {
        console.log(notes)
    }, [notes])


    const pinnedNotes = notes.filter((n) => n.isPinned)
    const otherNotes = notes.filter((n) => n.isPinned === false)
    console.log(pinnedNotes);
    console.log(otherNotes);


    return (
        <Fragment>
            <Navbar />
            <main className='flex'>
                <Sidebar />
                <div className="todo-text-wrapper w-screen mt-16">
                    <div className="text-box w-1/4 mx-auto border border-slate-300 shadow  rounded-md relative">
                        <div className="title border-slate-300 border-b ">
                            <input value={title} onChange={(e) => OnTitleChange(e)} className='w-full p-2 focus:outline-none' type="text" placeholder='Title' />
                        </div>
                        <div className="text-area bg-white ">
                            <textarea value={text} onChange={(e) => OnTextChange(e)} className='w-full h-32 p-2 focus:outline-none' placeholder='Enter Description'></textarea>
                            <button onClick={AddNotes} className='absolute bottom-2 right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center'><span class="material-symbols-outlined">add</span></button>
                        </div>
                    </div>

                    
                        {
                            pinnedNotes?.length > 0 && (
                                <div className="other-notes-wrapper flex flex-wrap gap-8 m-12">
                                    <h4 className='basis-full'>Pinned Notes</h4>

                                    {
                                        pinnedNotes?.length > 0 && pinnedNotes.map(({ id, title, text , isPinned}) => (
                                            <NotesCard id={id} text={text} title={title} isPinned={isPinned} />
                                        ))
                                    }
                                </div>
                            )
                        }
                        {
                            otherNotes?.length > 0 && (
                                <div className="pin-notes-wrapper flex flex-wrap gap-8 m-12">
                                    <h4  className='basis-full' >Other Notes</h4>
                                    {
                                        otherNotes?.length > 0 && otherNotes.map(({ id, title, text , isPinned}) => (
                                            <NotesCard id={id} text={text} title={title} isPinned={isPinned} />
                                        ))
                                    }
                                </div>
                            )
                        }





                    </div>
                
            </main>
        </Fragment>
    )
}

export default Home