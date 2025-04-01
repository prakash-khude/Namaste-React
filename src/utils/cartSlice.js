import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
        items:[]
    },
    reducers: {
        addItem: (state, action)=> {
            state.items.push(action.payload);
        },
        //Action is optional input parameter
        removeItem: (state,action) => {
            state.items.pop();
        },
        //action is an optional input parameter
        clearCart: (state) => {
            state.items.length = 0;            
        }
    }
});

export const {addItem, removeItem, clearCart} = cartSlice.actions;
export default cartSlice.reducer;