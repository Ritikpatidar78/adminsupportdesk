import axios from "axios";

const loginservice = async (formdata)=>{
        const response = await axios.post("/api/profile/login", formdata)
        if(response.data.isadmin){
                localStorage.setItem("aduser", JSON.stringify(response.data))
        return response.data
        }
       return
}

const registerservice = async (formdata) => {
        const response = await axios.post("/api/profile/register", formdata)
        if(response.data.isadmin){
                localStorage.setItem("aduser", JSON.stringify(response.data))
                return response.data
        }
       return
  
}
const authService = {
    loginservice,
    registerservice
}

export default authService