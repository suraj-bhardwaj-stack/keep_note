import { useNotes } from "../../Context/Notes-Context"

export default function NotesCard({title , text , id , isPinned}) {
    const {notesDispatch} = useNotes()
    const OnPineedNotes = () => {
         notesDispatch({
            type : "PIN",
            payload : {id},
        })
    }

    console.log(isPinned , 'is');
    
    
  return (
    <div className="notex-card-wrapper basis-72 max-w-72 p-4 bg-white rounded break-words">
        <ul className="notes-list">
            {
                <li key={id} className="notes">
                    <div className="notes-title-card flex justify-between items-center border-b pb-2">
                        <strong>{title}</strong>
                        <span class="material-symbols-outlined">edit_note</span>
                    </div>
                    <div className="notes-description-card py-2 border-b h-28 ">
                        <p className="whitespace-normal break-words line-clamp-4"> {text}</p>
                    </div>
                    <div className="extra-features flex justify-between items-center">
                        <div className="important-note">
                                <span class="material-symbols-outlined">label_important</span>
                                <button onClick={OnPineedNotes} >
                                    <span class={isPinned ? `material-icons` : `material-symbols-outlined`}>
                                        push_pin
                                    </span>
                                </button>
                        </div>
                        <div className="archive-and-bin mt-2">
                                <span class="material-symbols-outlined">archive</span>
                                <span class="material-symbols-outlined">delete_sweep</span>
                        </div>
                        
                    </div>
                </li>
            }
        </ul>
    </div>
  )
}
