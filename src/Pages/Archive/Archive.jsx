import Navbar from '../../Components/Navbar/Navbar'
import { Fragment } from 'react';
import NotesCard from "../../Components/NoteCard/NotesCard";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useNotes } from '../../Context/Notes-Context';

export default function Archive() {
    const {archive} = useNotes()
  return (
    <Fragment>
            <Navbar />
            <main className='flex'>
                <Sidebar />
                <div className="todo-text-wrapper w-screen m-12 ">
                    <div className="inner-archive-wrapper flex flex-wrap gap-8 ">
                            {
                        archive?.length > 0 && archive.map(({title , text , id , ispnned}) => (
                            <NotesCard title={title} id={id} text={text} isPinned={ispnned}/>
                        ))
                    }
                    </div>
                </div>
            </main>
        </Fragment>
  )
}
