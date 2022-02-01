import axios from "axios"
import { GET_USER_PROFILE } from "./utils/endpoints"

export default async function handler(req, res) {

    const auth = req.headers['authorization']

    const config = {
        headers: {
            Authorization: 'Bearer: ' + auth,
            'Content-Type': 'application/json',
        }
    }

    try{
        const response = await axios.get(GET_USER_PROFILE, config); 
        const userID = response.data.id
        res.status(200).json({userID: userID})
    } catch(error){
        console.log('error response!', error)
    }
    
}