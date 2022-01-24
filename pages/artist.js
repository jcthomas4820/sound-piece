import { useSelector } from "react-redux"
import { selectArtist } from "../redux/slices/music.slice"
import Image from 'next/image'

export default function Artist(){

    const artist = useSelector(selectArtist)
    const onClick = () => console.log('adding artist...')

    return(
        <>
            <h1>Artist Page</h1>
            <Image 
                src={artist.img}
                alt={'artist-image'}
            />
            <br />
            <span>{artist.name}</span>
            <br />
            <span>{artist.description}</span>
            <br />
            <button onClick={onClick}>Add</button>
        </>
    )
}