import { useState } from "react"
import { useDispatch } from "react-redux"
import { getArtist } from "../redux/slices/music.slice"
import { ENTER } from "../utils/constants"

export default function Search(){
    const dispatch = useDispatch()
    const [value, setValue] = useState('')

    const onChange = (e) => setValue(e.target.value)
    const onKeyDown = (e) => {if (e.key === ENTER) dispatch(getArtist())}

    return(
        <input style={{alignSelf: 'start'}} value={value} onChange={onChange} onKeyDown={onKeyDown} ></input>
    )
}