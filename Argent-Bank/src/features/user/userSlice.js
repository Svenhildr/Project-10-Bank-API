import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    token: "",
    status: "idle" // 'idle' | 'loading' | 'succeeded' | 'failed'
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state = initialState, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.username = action.payload.username;
        },
        clearUser: (state = initialState) => {
            console.log("clearUser action called");
            state.firstName = "";
            state.lastName = "";
            state.username = "";
            state.token = "";
            state.status = "idle";
        },
        setSignIn: (state = initialState, action) => {
            if (action.payload.token !== false && action.payload.token !== undefined && action.payload.token !== null) {
                state.token = action.payload.token;
            } else {
                state.token = false;
            }
        }
    }
});

export const { setUser, clearUser, setSignIn } = userSlice.actions;
export default userSlice.reducer;
