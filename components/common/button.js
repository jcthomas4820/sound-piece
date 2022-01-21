//  style = add loading indicator
export default function Button(props){

    return(
        <button onClick={props.onClick}>{props.label}</button>
    )
}