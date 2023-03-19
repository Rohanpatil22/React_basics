import {createSlice} from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit'

const initialState={
    todos: [{id: 1122, text: "Learn Javascript"},
    {id: 122, text: "Have to learn redux"}
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
        },

        remove_all_list :(state)=>{
            state.todos.length=0;
        },

        update_todo :(state,action)=>{

            
            // state.todos.map((item)=>{if(item.id===action.payload.id){item.text=action.payload.text}return state.todos});
            console.log(action.payload);

            state.todos.map((item)=>
            {if(item.id===action.payload[0].id)
                {
                    console.log("yes");
                    item.text=action.payload[1];
                }
                return state.todos;
            });

        }
    }
})

export const {addtodo,remove_todo,remove_all_list,update_todo} = todoSlice.actions;
export default todoSlice.reducer




