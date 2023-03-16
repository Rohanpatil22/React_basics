import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit'

const initialState={
    todos: [{id: 1122, text: "Learn JS with Hitesh"},
    {id: 122, text: "Done with redux"}
]
}

export const todoSlice = createSlice({

    name:'todo',
    initialState,
    reducers:{

        addtodo : (state,action)=>{

            const todo={
                id : nanoid(),
                text : action.payload
            }
            
            state.todos.push(todo)
        },

        remove_todo :(state,action)=>{

            state.todos=state.todos.filter((x)=>x.id!==action.payload);
        }
    }
})

export const {addtodo,remove_todo} = todoSlice.actions;
export default todoSlice.reducer




