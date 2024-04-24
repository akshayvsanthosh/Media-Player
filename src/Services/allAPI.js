import commonAPI from "./commonAPI"
import Server_URL from "./server_url"

// add video called by add.jsx
export const addVideoAPI = async (video) =>{
    return await commonAPI("POST", `${Server_URL}/allVideos`,video)
}