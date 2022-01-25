import Link from "next/link"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import Playlist from "../components/playlist"
import { getArtist } from "../redux/slices/music.slice"
import { extractAuthTokenFromUrl } from "../redux/slices/user.slice"

export default function Search(){

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(extractAuthTokenFromUrl())
    },[dispatch])

    const [artistInput, setArtistInput] = useState('')

    const onArtistInputChange = (e) => setArtistInput(e.target.value)
    const onClickSearch = () => {
        dispatch(getArtist())
    }

    return(
        <>
            <h1>Search Page</h1>
            <input value={artistInput} onChange={onArtistInputChange}></input>
            <Link href="/artist" passHref={true}>
                <button onClick={onClickSearch}>Search</button>
            </Link>
            <br />
            <Playlist />
        </>
    )
}