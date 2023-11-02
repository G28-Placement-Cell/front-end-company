// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     companyInfo: localStorage.getItem('companyInfo') ? JSON.parse(localStorage.getItem('companyInfo')) : null,
// }

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         setcred(state, action) {
//             state.companyInfo = action.payload;
//             localStorage.setItem('companyInfo', JSON.stringify(action.payload));
//         },
//         logout(state) {
//             state.companyInfo = null;
//             localStorage.removeItem('companyInfo');
//         }
//     }
// })

// export const { setcred, logout } = authSlice.actions;
// export default authSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    companyInfo: localStorage.getItem('companyInfo')
        ? JSON.parse(localStorage.getItem('companyInfo'))
        : null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.companyInfo = action.payload;
            state.token = action.payload.token;
            localStorage.setItem('companyInfo', JSON.stringify(action.payload));
            localStorage.setItem('token', action.payload.token);
        },
        getCredentials: (state, action) => {
            state.companyInfo = localStorage.getItem('companyInfo')
                ? JSON.parse(localStorage.getItem('companyInfo'))
                : null;
        },
        logout: (state, action) => {
            state.companyInfo = null;
            localStorage.removeItem('companyInfo');
            localStorage.removeItem('token');
        },
        getData: (state, action) => {
            localStorage.getItem('companyInfo.student_id');
        }
    },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;