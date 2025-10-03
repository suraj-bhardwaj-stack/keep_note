import { createContext , useContext , useReducer } from "react";
import { NotesReducers } from "../Reducer/NotesReducers";



const NotesContext =  createContext();

export const NotesProvider = ({children}) => {
            const initialState = {
            title : "",
            text : "",
            notes : [],
            archive : [],
            bin : []
        }
    const [{title , text , notes , archive , bin } ,notesDispatch] = useReducer(NotesReducers , initialState)
    
    return(
        <NotesContext.Provider value={{title , text , notes , archive, bin , notesDispatch}}>
            {children}
        </NotesContext.Provider>
    )
}

export const useNotes = () => useContext(NotesContext)

