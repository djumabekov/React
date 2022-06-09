const List = ({classNameContainer, name, lastname, username, password, birthdate, phone, color}) => {
    return(
        <ul className={classNameContainer}>
            <li>name = {name}</li>
            <li>lastname = {lastname}</li>
            <li>username = {username}</li>
            <li>password = {password}</li>
            <li>birthdate = {birthdate}</li>
            <li>phone = {phone}</li>
            <li>color = {color}</li>
        </ul>
    )
}

export default List