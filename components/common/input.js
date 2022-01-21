//  style = take in default label (i.e. Artist Name), show in input field in grey, clear once click on input
export default function Input(props){

    return(
        <input value={props.inputValue} onChange={props.onChange}></input> 
    )
}