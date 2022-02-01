import Playlist from "../components/playlist";
import Artist from "./artist";

export default function SoundPiece(){

    return(
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <input style={{alignSelf: 'start'}}></input>
            <Artist />
            <div style={{alignSelf: 'start'}}>
                <Playlist />
            </div>
        </div>
    )
}