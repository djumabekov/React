import { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import List from "./components/List";
import './App.css';

function App() {

  //стейты полей input
  const [name, setName] = useState("")
  const [lastname, setLastname] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [phone, setPhone] = useState("")
  const [color, setColor] = useState("");

  //вспомогательные стейты
  const [colors] = useState({ red: "red", green: "green", blue: "blue" });  // хранит цвета радио кнопок
  const [isShow, setIsShow] = useState(false); // хранит флаг состояния валидации формы
  const [errorMessage, setErrorMessage] = useState(""); // хранит сообщение об ошибке

  //стейт для хранения результатов валидации каждого поля (false - поле обязательное, true - необязательное)
  const [validStatus, setValidStatus] = useState({ name: false, lastname: false, username: false, password: false, birthdate: true, phone: true, color: false })

  //Фукнция на событие изменения поля имени  
  const handleOnChangeName = (value, isValid) => {
    setName(value);
    let temp = validStatus;
    temp.name = isValid;
    setValidStatus(temp);
    console.log("name isValid =  " + validStatus.name);
  }

  //Фукнция на событие изменения поля фамилии  
  const handleOnChangeLastname = (value, isValid) => {
    setLastname(value);
    let temp = validStatus;
    temp.lastname = isValid;
    setValidStatus(temp);
    console.log("lastname isValid =  " + validStatus.lastname);
  }

  //Фукнция на событие изменения поля пользователя  
  const handleOnChangeUsername = (value, isValid) => {
    setUsername(value);
    let temp = validStatus;
    temp.username = isValid;
    setValidStatus(temp);
    console.log("username isValid =  " + validStatus.username);
  }

  //Фукнция на событие изменения поля пароля
  const handleOnChangePassword = (value, isValid) => {
    setPassword(value);
    let temp = validStatus;
    temp.password = isValid;
    setValidStatus(temp);
    console.log("password isValid =  " + validStatus.password);
  }

  //Фукнция на событие изменения поля даты 
  const handleOnChangeBirthdate = (value, isValid) => {
    setBirthdate(value);
    let temp = validStatus;
    temp.birthdate = isValid;
    setValidStatus(temp);
    console.log("birthdate isValid =  " + validStatus.birthdate);
  }

  //Фукнция на событие изменения поля телефона 
  const handleOnChangePhone = (value, isValid) => {
    setPhone(value);
    let temp = validStatus;
    temp.phone = isValid;
    setValidStatus(temp);
    console.log("phone isValid =  " + validStatus.phone);
  }

  //Фукнция на событие изменения радио кнопок цветов
  const handleOnChangeColor = (value, isValid) => {
    setColor(value);
    let temp = validStatus;
    temp.color = isValid;
    setValidStatus(temp);
    console.log("color isValid =  " + validStatus.color);
  }

  //функция валидации формы при нажатии на кнопку submit
  const validationForm = () => {
    const result = Object.values(validStatus);
    for (let item of result) {
      //если на момент вызова хотя бы одно значение в объекте validStatus = false, валидация формы не пройдена
      if (item === false) {
        setIsShow(false);
        setErrorMessage("Form contains incorrect values!");
        break;
      }
      // иначе пройдена
      else {
        setIsShow(true);
      }
    }
  }

  return (
    <div className="box">
      <form>

        <Input
          classNameContainer={validStatus.name ? "input-container-valid" : "input-container-invalid"}
          min={1}
          max={20}
          label="Name"
          name="name"
          placeholder={"Name"}
          onCustomChange={handleOnChangeName} value={name} type="text" />

        <Input
          classNameContainer={validStatus.lastname ? "input-container-valid" : "input-container-invalid"}
          min={1}
          max={20}
          label="Lastname"
          name="lastname"
          placeholder={"Lastname"}
          onCustomChange={handleOnChangeLastname} value={lastname} type="text" />

        <Input
          classNameContainer={validStatus.username ? "input-container-valid" : "input-container-invalid"}
          min={5}
          max={20}
          label="Username"
          name="username"
          placeholder={"Username"}
          onCustomChange={handleOnChangeUsername} value={username} type="text" />

        <Input
          classNameContainer={validStatus.password ? "input-container-valid" : "input-container-invalid"}
          min={8}
          max={20}
          label="Password"
          name="password"
          placeholder={"123456zZ!"}
          onCustomChange={handleOnChangePassword} value={password} type="password" />

        <Input
          classNameContainer={validStatus.birthdate ? "input-container-valid" : "input-container-invalid"}
          label="Birthdate"
          name="birthdate"
          placeholder={"01.01.1970"}
          onCustomChange={handleOnChangeBirthdate} value={birthdate} type="date" />

        <Input
          classNameContainer={validStatus.phone ? "input-container-valid" : "input-container-invalid"}
          min={12}
          max={12}
          label="Phone"
          name="phone"
          placeholder={"+77771234567"}
          onCustomChange={handleOnChangePhone} value={phone} type="text" />
        <div>

          <Input
            classNameContainer={validStatus.color ? "custom-radio-valid": "custom-radio-invalid"}
            name="color"
            label={colors.red}
            onCustomChange={handleOnChangeColor}
            value={colors.red} type="radio" />

          <Input
            classNameContainer={validStatus.color ? "custom-radio-valid": "custom-radio-invalid"}
            name="color"
            label={colors.green}
            onCustomChange={handleOnChangeColor}
            value={colors.green} type="radio" />

          <Input
            classNameContainer={validStatus.color ? "custom-radio-valid": "custom-radio-invalid"}
            name="color"
            label={colors.blue}
            onCustomChange={handleOnChangeColor}
            value={colors.blue} type="radio" />
        </div>
        <Button validation={validationForm} />

      </form>
      <div>
        {isShow ? <List classNameContainer={"list-container"} name={name} lastname={lastname} username={username} password={password} birthdate={birthdate} phone={phone} color={color}/> : <p><font size="3" color="red" face="Arial">{errorMessage}</font></p>}
      </div>
    </div>

  );
}

export default App;
