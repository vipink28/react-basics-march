function Header(){
    var firstName = "Shubham";
    var isHeading = false;
    // ternary operator ?

    const myStyle = {
        color:'green',
        backgroundColor: 'yellow',
        fontSize: 24
    }
    
    return(
        // dynamic class name
        <div className={isHeading ? "red":"blue"}>
            <h3>{firstName}</h3>

            <p style={{color:"red", backgroundColor:"yellow"}}>Hello World</p>
            <p style={myStyle}>Hello World</p>
        </div>
    )
}
export default Header;