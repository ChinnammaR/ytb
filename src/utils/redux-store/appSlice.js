import { createSlice } from "@reduxjs/toolkit";



const appSlice=createSlice({

    name:'app',
    initialState:{
        showMenu:true
    },
    reducers:{
        toogleMenuBar:(state)=>{
            state.showMenu=!state.showMenu;
        },
        closeSideBar:(state)=>{
            state.showMenu=false;
        }
    }

});


export const{toogleMenuBar,closeSideBar}=appSlice.actions;

export default  appSlice.reducer;