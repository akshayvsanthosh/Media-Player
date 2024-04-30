import commonAPI from "./commonAPI"
import Server_URL from "./server_url"

// add video called by add.jsx
export const addVideoAPI = async (video) =>{
    return await commonAPI("POST", `${Server_URL}/allVideos`,video)
}

// get all videos called by view component
export const getAllVideoAPI = async () =>{
    return await commonAPI("GET",`${Server_URL}/allVideos`,"")
}

// remove video called by videocard component
export const removeVideoAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${Server_URL}/allVideos/${videoId}`,{})
}

// savehistory called by videocard component
export const saveHistoryAPI = async (video)=>{
    return await commonAPI("POST",`${Server_URL}/history`,video)
}

// get video history called by history component
export const getVideoHistoryAPI = async ()=>{
    return await commonAPI("GET",`${Server_URL}/history`,"")
}

// remove history called from history component
export const  removeHistoryAPI = async (videoId)=>{
    return await commonAPI("DELETE",`${Server_URL}/history/${videoId}`,{})
}