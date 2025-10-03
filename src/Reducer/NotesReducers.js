import {v4 as uuid} from 'uuid'
export const NotesReducers = (state , {type , payload}) =>{
    switch(type){
        case 'TITLE' :
        return{
            ...state,
            title : payload
        }

        case 'TEXT' :
            return{
            ...state,
            text : payload
        }

        case 'ADD_NOTES' : 

        return {
          ...state,
          notes: [...state.notes, {title : state.title , text: state.text, id:uuid() , isPinned : false}], // ✅ add new note properly
          title: "",   // ✅ reset title
          text: "",    // ✅ reset text
        };

        case 'PIN' : 
        return{
          ...state,
          notes: state.notes.map(note => note.id === payload.id ? {...note , isPinned : !note.isPinned} : note)
        }
        

        default :
        return  state
    }
} 