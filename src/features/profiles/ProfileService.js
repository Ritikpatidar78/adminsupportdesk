import axios from "axios"

const getallprofileservice = async (token)=>{
    const response = await axios.get("/api/admin/profile",{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const getallticketsservice = async (token)=>{
    const response = await axios.get("/api/admin",{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const getallnotesservice = async (id,token)=>{
    const response = await axios.get(`/api/admin/note/${id}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const getprofileticketservice = async (id,token)=>{
    const response = await axios.get(`/api/admin/ticket/${id}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const createnoteservice = async (formdata,token)=>{
    const response = await axios.post("/api/admin",formdata,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const updateticketservice = async (formdata,token)=>{
    const response = await axios.put(`/api/admin/${formdata._id}`,formdata,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const deleteticketservice = async (id,token)=>{
    const response = await axios.delete(`/api/admin/${id}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}



const profileservice = {getallprofileservice,deleteticketservice,getprofileticketservice,getallnotesservice,getallticketsservice,updateticketservice,createnoteservice}

export default profileservice