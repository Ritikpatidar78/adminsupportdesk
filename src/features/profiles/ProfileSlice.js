import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import profileservice from "./ProfileService";


const initialState = {
    profiles :[],
    isLoading: false,
    isError: false,
    isSuccess: false,
    message: "",
    tickets: [],
    notes: [],
    sticket: {},
}

const ProfileSlice = createSlice({
    name: "profile",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
         builder
            .addCase(getallprofile.pending , (state)=> {
                state.isLoading= true,
                state.isError= false,
                state.isSuccess= false,
                state.message= ""
            })
            .addCase(getallprofile.fulfilled,(state,action)=>{
                state.profiles = action.payload;
                state.isLoading= false,
                state.isError= false,
                state.isSuccess= true,
                state.message= ""
            })
            .addCase(getallprofile.rejected,(state,action)=>{
                state.isLoading= false,
                state.isError= true,
                state.isSuccess= false,
                state.message= action.payload
            })
            .addCase(getallticket.pending , (state)=> {
                state.isLoading= true,
                state.isError= false,
                state.isSuccess= false,
                state.message= ""
            })
            .addCase(getallticket.fulfilled,(state,action)=>{
                state.tickets = action.payload;
                state.isLoading= false,
                state.isError= false,
                state.isSuccess= true,
                state.message= ""
            })
            .addCase(getallticket.rejected,(state,action)=>{
                state.isLoading= false,
                state.isError= true,
                state.isSuccess= false,
                state.message= action.payload
            })
            .addCase(getalluserticket.pending , (state)=> {
                state.isLoading= true,
                state.isError= false,
                state.isSuccess= false,
                state.message= ""
            })
            .addCase(getalluserticket.fulfilled,(state,action)=>{
                state.tickets = action.payload;
                state.isLoading= false,
                state.isError= false,
                state.isSuccess= true,
                state.message= ""
            })
            .addCase(getalluserticket.rejected,(state,action)=>{
                state.isLoading= false,
                state.isError= true,
                state.isSuccess= false,
                state.message= action.payload
            })
            .addCase(getallnote.pending , (state)=> {
                state.isLoading= true,
                state.isError= false,
                state.isSuccess= false,
                state.message= ""
            })
            .addCase(getallnote.fulfilled,(state,action)=>{
                state.notes = action.payload;
                state.isLoading= false,
                state.isError= false,
                state.isSuccess= true,
                state.message= ""
            })
            .addCase(getallnote.rejected,(state,action)=>{
                state.isLoading= false,
                state.isError= true,
                state.isSuccess= false,
                state.message= action.payload
            })
            .addCase(getsingleticket.fulfilled , (state,action)=> {
                state.isLoading= false,
                state.isError= false,
                state.isSuccess= true,
                state.message= "",
                state.sticket = action.payload
            })
           
            .addCase(createnote.pending , (state)=> {
                state.isLoading= true,
                state.isError= false,
                state.isSuccess= false,
                state.message= ""
            })
            .addCase(createnote.fulfilled,(state,action)=>{
                state.notes = [...state.notes,action.payload];
                state.isLoading= false,
                state.isError= false,
                state.isSuccess= true,
                state.message= ""
            })
            .addCase(createnote.rejected,(state,action)=>{
                state.isLoading= false,
                state.isError= true,
                state.isSuccess= false,
                state.message= action.payload
            })
    
    }
})

export default ProfileSlice.reducer

export const getallprofile = createAsyncThunk("GET/PROFILE" , async(_,thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
            const data = await profileservice.getallprofileservice(token)
        return data
        } catch (error) {
            const message = error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
} )
export const getallticket = createAsyncThunk("GET/TICKET" , async(_,thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
            const data = await profileservice.getallticketsservice(token)
        return data
        } catch (error) {
            const message = error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
} )
export const getallnote = createAsyncThunk("GET/NOTE" , async(id,thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
            const data = await profileservice.getallnotesservice(id,token)
        return data
        } catch (error) {
            const message = error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
} )
export const getalluserticket = createAsyncThunk("GET/USERTICKET" , async(id,thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
            const data = await profileservice.getprofileticketservice(id,token)
        return data
        } catch (error) {
            const message = error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
} )
export const createnote = createAsyncThunk("CREATE/NOTE" , async(formdata,thunkAPI) => {
        try {
        const token = thunkAPI.getState().auth.user.token
            const data = await profileservice.createnoteservice(formdata,token)
        return data
        } catch (error) {
            const message = error.response.data.message
            return thunkAPI.rejectWithValue(message)
        }
} )
export const getsingleticket  = createAsyncThunk("GET/STICKET", async(id,thunkAPI) => {
 
    const tickets = thunkAPI.getState().profile.tickets
    const data = tickets.filter((item)=> item._id === id)
    return data[0]
})


export const editticket = createAsyncThunk("EDIT/TICKET" , async(formdata,thunkAPI) => {
    try {
    const token = thunkAPI.getState().auth.user.token
        const data = await profileservice.updateticketservice(formdata,token)
    return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})
export const deleteticket = createAsyncThunk("DELETE/TICKET" , async(id,thunkAPI) => {
    try {
    const token = thunkAPI.getState().auth.user.token
        const data = await profileservice.deleteticketservice(id,token)
    return data
    } catch (error) {
        const message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
} )

