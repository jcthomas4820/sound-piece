import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { extractAuthTokenFromUrl } from "../redux/slices/user.slice"

export default function Search(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(extractAuthTokenFromUrl())
    },[dispatch])

    return(
        <>
            <h1>Search Page</h1>
        </>
    )
}