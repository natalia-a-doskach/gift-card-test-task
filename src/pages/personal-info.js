import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import Input from "../components/input/input";
import Button from "../components/button/button";
import styles from "./personal-info.module.css";
import ErrorHint from "../components/error-hint/error-hint";
import { PurchaseContext } from "../utils/purchase-context";
import { API_KEY } from "../utils/api-key";
import { BASE_URL } from "../utils/base-api-url";

const phoneRegex = /^((8|\+7)[- ]?)?(\(?\d{3}\)?[- ]?)?[\d\- ]{7,10}$/;
const URL = BASE_URL;

function PersonalInfoPage() {
  const navigate = useNavigate();
  const [purchaseData] = useContext(PurchaseContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const errorNames = [
    "Введите имя",
    "Введите телефон",
    "Введите почту",
    "Неверный формат номера телефона",
  ];
  const [errors, setErrors] = useState([]);
  const back = (id) => {
    navigate("/shop");
  };
  const sendInfo = () => {
    let errorList = [];
    if (!name) errorList.push(errorNames[0]);
    if (!phone) errorList.push(errorNames[1]);
    if (!email) errorList.push(errorNames[2]);
    if (!phone.match(phoneRegex)) errorList.push(errorNames[3]);
    if (errorList.length === 0) sendToAPI();
    else setErrors(errorList);
  };
  const sendToAPI = () => {
    let formData = new FormData();
    formData.append("ApiKey", API_KEY);
    formData.append("MethodName", "OSSale");
    formData.append("Id", purchaseData.ID);
    formData.append("TableName", purchaseData.TABLENAME);
    formData.append("PrimaryKey", purchaseData.PRIMARYKEY);
    formData.append("price", purchaseData.PRICE);
    formData.append("Summa", purchaseData.SUMMA);
    formData.append("ClientName", name);
    formData.append("Phone", phone);
    formData.append("Email", email);
    formData.append("PaymentTypeId", 2);
    formData.append("UseDelivery", 0);
    formData.append("IsGift", 0);
    fetch(URL, {
      body: formData,
      method: "post",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.resultdescription === "OK") navigate("/payment");
      });
  };
  return (
    <div className={styles.container}>
      <form onSubmit={sendInfo}>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={(e) => {
            setName(e.target.value);
            setErrors([]);
          }}
          value={name}
          name={"name"}
        />
        <Input
          type={"text"}
          placeholder={"Телефон"}
          onChange={(e) => {
            setPhone(e.target.value);
            setErrors([]);
          }}
          value={phone}
          name={"phone"}
        />
        <Input
          type={"text"}
          placeholder={"Почта"}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors([]);
          }}
          value={email}
          name={"email"}
        />
        <ErrorHint errors={errors} />
        <div className={styles.btnsContainer}>
          <Button text={"Оплатить"} onClick={sendInfo} />
          <Button text={"Назад"} onClick={back} />
        </div>
      </form>
    </div>
  );
}

export default PersonalInfoPage;
