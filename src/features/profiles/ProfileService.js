import axios from "axios"

const getallprofileservice = async (token)=>{
    const response = await axios.get("https://supportdeskbackend-o50j.onrender.com/api/admin/profile",{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const getallticketsservice = async (token)=>{
    const response = await axios.get("https://supportdeskbackend-o50j.onrender.com/api/admin",{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const getallnotesservice = async (id,token)=>{
    const response = await axios.get(`https://supportdeskbackend-o50j.onrender.com/api/admin/note/${id}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const getprofileticketservice = async (id,token)=>{
    const response = await axios.get(`https://supportdeskbackend-o50j.onrender.com/api/admin/ticket/${id}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const createnoteservice = async (formdata,token)=>{
    const response = await axios.post("https://supportdeskbackend-o50j.onrender.com/api/admin",formdata,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const updateticketservice = async (formdata,token)=>{
    const response = await axios.put(`https://supportdeskbackend-o50j.onrender.com/api/admin/${formdata._id}`,formdata,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}
const deleteticketservice = async (id,token)=>{
    const response = await axios.delete(`https://supportdeskbackend-o50j.onrender.com/api/admin/${id}`,{
        headers: {
          'Authorization': 'Bearer ' + token 
        }
      })
   return response.data
}



const profileservice = {getallprofileservice,deleteticketservice,getprofileticketservice,getallnotesservice,getallticketsservice,updateticketservice,createnoteservice}

export default profileservice