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
        },
        setReset: (state, action) => {
            state.resetInfo = action.payload.payload;
            localStorage.setItem('resetId', (action.payload.payload.reset._id));
        },
        removeReset: (state, action) => {
            state.resetInfo = null;
            localStorage.removeItem('resetId');
        },
    },
});

export const { setCredentials, logout, setReset, removeReset } = authSlice.actions;

export default authSlice.reducer;