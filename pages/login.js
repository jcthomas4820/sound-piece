import { useDispatch } from "react-redux"
import { getAuthToken } from "../redux/slices/user.slice"

export default function Sample(){

    const dispatch = useDispatch()

    const onClick = () => dispatch(getAuthToken())

    return(
        <>
            <button onClick={onClick}>Log In</button>
        </>
    )
}