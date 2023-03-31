function User(props){
    console.log(props);
    const {title, data, gender} = props;
    

    // var {property1, property2} = object;
    // props is an object in which properties are defined in parent component.
    return(
        <div className={"card " + (props.isRed ? "bg-red": "")}>
            <h2>Vipin</h2>
            <p>{props.title} {props.data} {props.gender}</p>
            
            <p>Web Developer</p>
        </div>
    )
}
export default User;