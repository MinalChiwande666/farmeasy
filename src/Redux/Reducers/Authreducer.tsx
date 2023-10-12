import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const loggedin = async()=>{
   let data = await AsyncStorage.getItem('auth')
   return data
}
let active:any = loggedin()
interface AuthState{
    login:boolean
}

const initialState: AuthState = {
    login:false
}

const loginSlice = createSlice({
    name:'login',
    initialState,
    reducers:{
        auth : (state,{payload})=>{
          
           state.login = payload
          
        }
    }
})
export const {auth} = loginSlice.actions;
export default loginSlice.reducer;

