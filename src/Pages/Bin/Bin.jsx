import Navbar from '../../Components/Navbar/Navbar'
import { Fragment } from 'react';
import NotesCard from "../../Components/NoteCard/NotesCard";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useNotes } from '../../Context/Notes-Context';

export default function Bin() {
    const {bin} = useNotes()
    
  return (
    <Fragment>
            <Navbar />
            <main className='flex'>
                <Sidebar />
                <div className="todo-text-wrapper w-screen m-12 ">
                    <div className="inner-archive-wrapper flex flex-wrap gap-8 ">
                            {
                        bin?.length > 0 && bin.map(({title , text , id , isPinned}) => (
                            <NotesCard  title={title} id={id} text={text} isPinned={isPinned}/>

                        ))
                    }
                    
                    </div>
                </div>
            </main>
        </Fragment>
  )
}
