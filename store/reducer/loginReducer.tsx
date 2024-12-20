import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginInput: {
            _id: '',
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            token: '',
        }
    },
    reducers: {
        setData: (state, action) => {
            state.loginInput = { ...state.loginInput, ...action.payload }
        },
        resetData: (state) => {
            state.loginInput = {
                _id: '',
                name: '',
                email: '',
                password: '',
                confirm_password: '',
                token: '',
            }
        }
    }
})

export const { setData, resetData } = loginSlice.actions
export default loginSlice.reducer