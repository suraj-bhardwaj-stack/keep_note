import { createContext , useContext , useReducer } from "react";
import { NotesReducers } from "../Reducer/NotesReducers";



const NotesContext =  createContext();

export const NotesProvider = ({children}) => {
            const initialState = {
            title : "",
            text : "",
            notes : []
        }
    const [{title , text , notes  } ,notesDispatch] = useReducer(NotesReducers , initialState)
    
    return(
        <NotesContext.Provider value={{title , text , notes , notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotes = () => useContext(NotesContext)

