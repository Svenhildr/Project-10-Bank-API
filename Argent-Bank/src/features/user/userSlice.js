import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: "",
    lastName: "",
    username: "",
    token: ""
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            const { firstName, lastName, username, token } = action.payload;
            state.firstName = firstName;
            state.lastName = lastName;
            state.username = username;
            state.token = token;
        },
        clearUser: (state) => {
            state.firstName = "";
            state.lastName = "";
            state.username = "";
            state.token = "";
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
