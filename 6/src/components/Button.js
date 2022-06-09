
const Button = ({ validation }) => {

    const handleOnClick = (e) =>{
        e.preventDefault();
        validation();
    }

    return(
        <button onClick={e=>handleOnClick(e)} type="button" className="btn">submit</button>
    )
}

export default Button