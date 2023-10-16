import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import Input from "../components/input/input";
import Button from "../components/button/button";
import styles from "./personal-info.module.css";
import ErrorHint from "../components/error-hint/error-hint";

const phoneRegex = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/

function PersonalInfoPage() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const errorNames = ["Введите имя","Введите телефон","Введите почту","Неверный формат номера телефона"];
  const [errors, setErrors] = useState([]);
  const back = (id) => {
    navigate("/shop");
  };
  const sendInfo = () => {
    if(!name) setErrors([...errors,errorNames[0]]);
    if(!email) setErrors([...errors,errorNames[1]]);
    if(!phone) setErrors([...errors,errorNames[2]]);
    if(!phone.match(phoneRegex)) {errors.push(errorNames[3]);console.log(errors)}
    if (errors.length == 0) navigate("/payment");
  };
  return (
    <div className={styles.container}>
      <form onSubmit={sendInfo}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => {setName(e.target.value);setErrors([])}}
          value={name}
          name={"name"}
        />
        <Input
          type={"text"}
          placeholder={"Телефон"}
          onChange={(e) => {setPhone(e.target.value);setErrors([])}}
          value={phone}
          name={"phone"}
        />
        <Input
          type={"text"}
          placeholder={"Почта"}
          onChange={(e) => {setEmail(e.target.value);setErrors([]);}}
          value={email}
          name={"email"}
        />
        <ErrorHint errors={errors}/>
        <div className={styles.btnsContainer}>
        <Button
          text={"Оплатить"}
          onClick={sendInfo}
        />
        <Button
          text={"Назад"}
          onClick={back}
        />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoPage;
