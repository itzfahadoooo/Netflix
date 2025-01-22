import axios from "axios"
import {create} from "zustand"
import toast from "react-hot-toast"

export const useAuthStore = create((set) => ({
    user: null,
    isSigningUp: false,
    isCheckingAuth: true,
    signup: async (credentials) => {
        set({isSigningUp:true})
        try {
            const response=await axios.post("/api/v1/auth/signup",credentials)
            set({user:response.data.user,isSigningUp:false})
            toast.success("Account created successfully")
        } catch (error) {
            toast.error(error.response.data.message || "An error occurred")
            set({isSigningUp:false,user:null})
        }
    },
    login: async () => set({}),
    logout: async () => set({}),
    authCheck: async () =>{
        set({isCheckingAuth:true})
        try {
            const response=await axios.get("/api/v1/auth/authCheck")
            set({user:response.data.user,isCheckingAuth:false})
        } catch (error) {
            set({isCheckingAuth:false,user:null})
            // toast.error(error.response.data.message || "An error occurred")
        }
    },
}))