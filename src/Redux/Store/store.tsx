import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../Reducers/CounterReducer";
import Authreducer from "../Reducers/Authreducer";

const store = configureStore({
    reducer :{
     counter: CounterReducer,
     Auth:Authreducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;