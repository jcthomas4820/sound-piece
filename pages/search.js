import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Button from "../components/common/button"
import Input from "../components/common/input"
import Playlist from "../components/playlist"
import { getArtist } from "../redux/slices/music.slice"
import { extractAuthTokenFromUrl } from "../redux/slices/user.slice"

export default function Search(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(extractAuthTokenFromUrl())
    },[dispatch])

    const [value, setValue] = useState('')

    const onChange = (e) => setValue(e.target.value)
    const onClick = () => dispatch(getArtist())

    return(
        <>
            <h1>Search Page</h1>
            <Input value={value} onChange={onChange}/>
            <Button label={'Search'} onClick={onClick}></Button>
            <br />
            <Playlist />
        </>
    )
}