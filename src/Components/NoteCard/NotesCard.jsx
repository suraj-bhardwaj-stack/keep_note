import { useNotes } from "../../Context/Notes-Context"
import { findNotesInArchive } from "../../Utils/findNotesInArchive";
import { findNotesInBin } from "../../Utils/findNotesInBin";
export default function NotesCard({title , text , id , isPinned}) {
    const {notesDispatch,  archive , bin} = useNotes()
    const isNotesInArchive = findNotesInArchive(archive , id)
    const isNotesInBin = findNotesInBin(bin , id)

    const OnPineedNotes = () => {
         notesDispatch({
            type : "PIN",
            payload : {id},
        })
    }

    const ADD_TO_ARCHIVE = () => {
        !isNotesInArchive ? notesDispatch({
            type: "ADD_TO_ARCHIVE",
            payload : {id},
        }) : notesDispatch({
            type: "REMOVE_TO_ARCHIVE",
            payload : {id},
        })
    }

    const Delete_Notes = () => {
          !isNotesInBin ? notesDispatch({
                type : "DELETE_NOTES",
                payload : {id}
            }) : notesDispatch({
                type: 'DELETE_FROM_BIN',
                payload : {id}
            })
    }

    
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
                                <button onClick={ADD_TO_ARCHIVE}><span class={isNotesInArchive ? `material-icons` : `material-symbols-outlined`}>archive</span></button>
                                <button onClick={Delete_Notes}><span class={isNotesInBin ? `material-icons` :`material-symbols-outlined`}>delete_sweep</span></button>
                        </div>
                        
                    </div>
                </li>
            }
        </ul>
    </div>
  )
}
