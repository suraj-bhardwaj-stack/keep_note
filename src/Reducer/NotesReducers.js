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
            notes: [...state.notes, {title : state.title , text: state.text, id:uuid() , isPinned : false}], 
            title: "",   
            text: "",    
        };

        case 'PIN' : 
        return{
          ...state,
          notes: state.notes.map(note => note.id === payload.id ? {...note , isPinned : !note.isPinned} : note)
        }

        case 'ADD_TO_ARCHIVE' :
          return{
            ...state,
            archive : [...state.archive , state.notes.find(({id}) => id === payload.id)], 
            notes : state.notes.filter(note => note.id !== payload.id)
          }
        case  'REMOVE_TO_ARCHIVE' : 
          return{
            ...state,
            archive : state.archive.filter(note => note.id !== payload.id),
            notes : [...state.notes , state.archive.find(({id}) => id=== payload.id)]
          }
        case 'DELETE_NOTES' :
          return{
            ...state,
            archive : state.archive.filter(note => note.id !== payload.id),
            notes : state.notes.filter(note => note.id !== payload.id),
            bin : [...state.bin , state.notes.find(({id}) => id === payload.id)], 
          }
        case 'DELETE_FROM_BIN' :
          return{
            ...state,
            bin : state.bin.filter(note => note.id !== payload.id)

          }

        default :
        return  state
    }
} 