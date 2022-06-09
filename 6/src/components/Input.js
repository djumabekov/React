
const Input = ({ name, label, min, max, value, type, classNameContainer, onCustomChange, placeholder }) => {

    //функция валидации полей
    function validation(e) {
        let len;
        switch (e.target.name) {

            case "name":
                len = e.target.value.trim().length;
                if (len < +min || len > +max) {
                    console.log("The name should not be empty or more then 20 characters!");
                    return false;
                }
                break;
            case "lastname":
                len = e.target.value.trim().length;
                if (len < +min || len > +max) {
                    console.log("The lastname should not be empty or more then 20 characters!");
                    return false;
                }
                break;
            case "username":
                len = e.target.value.trim().length;
                if (len < +min || len > +max) {
                    console.log("The username should not be less then 5 characters or more then 20 characters!");
                    return false;
                }
                break;
            case "password":
                len = e.target.value.trim().length;
                if (len < +min || len > +max) {
                    console.log("The password should not be less then 8 characters or more then 20 characters!");
                    return false;
                }
                else {
                    const re = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\])(?=.*?[A-Za-z\d@$!%*+?&\.\+\*\{\]\{\[\-,;`<>':"=^#_|\/\\]).{8,}/);
                    const isOk = re.test(e.target.value);
                    if (!isOk) {
                        console.log("The password should  be contains one or more big and small symbols, digits and '$,%,#,@,!' characters!");
                        return false;
                    }
                }
                break;
            case "phone":
                len = e.target.value.trim().length;
                if (len !== 0) {
                    if (len < +min || len > +max) {
                        console.log("The phone should be contains '+' and 11 digits!");
                        return false;
                    }
                    else {
                        const re = new RegExp(/^\+7\s?[0-9]{3}\s?[0-9]{3}\s?[0-9]{2}\s?[0-9]{2}/);
                        const isOk = re.test(e.target.value);
                        if (!isOk) {
                            console.log("The phone should be +7ХХХХХХХХХХ format!");
                            return false;
                        }
                    }
                }
                break;

            case "color":
                if (e.target.value === undefined) {
                    return false;
                }
                break;

            case "birthdate":
                if (e.target.value !== null) {
                    const inputDate = e.target.value;
                    const currentDate = new Date().toISOString().slice(0, 10);
                    const res = (inputDate < currentDate);
                    console.log("inputDate = " + inputDate + "currentDate = " + currentDate)
                    if (!res) {
                        console.log("The date should be less then current date!");
                        return false;
                    }
                }
                break;
        }
        return true;
    }

    //функция вызывающая родительскую функцию, которая стейтит текущее состояние value поля и вызывает функцию ее валидации
    const handleOnChange = (e) => {
        onCustomChange(e.target.value, validation(e));
    }


    return (
        <div className={classNameContainer}>
            <input onChange={e => handleOnChange(e)} value={value} type={type} placeholder={placeholder} name={name} />
            {label !== null ? <label for={label}>{label}</label> : null}

        </div>
    )
}

export default Input