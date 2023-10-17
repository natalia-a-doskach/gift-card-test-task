import { useEffect, useState, useContext } from "react";
import ProductCard from "../components/product-card/product-card";
import { BASE_URL } from "../utils/base-api-url";
import { API_KEY } from "../utils/api-key";
import { useNavigate } from "react-router-dom";
import Subheader from "../components/subheader/subheader";
import styles from "./gift-card-selection.module.css";
import Button from "../components/button/button";
import { change_currency_to_symbol } from "../utils/text-formating";
import { PurchaseContext } from "../utils/purchase-context";

const URL = BASE_URL;

function GiftCardSelectionPage() {
  const navigate = useNavigate();
  const [purchaseData, setPurchaseData] = useContext(PurchaseContext);
  const [giftCards, setGiftCards] = useState([]);
  useEffect(() => {
    let formData = new FormData();
    formData.append("ApiKey", API_KEY);
    formData.append("MethodName", "OSGetGoodList");
    formData.append("ismob", 0);
    fetch(URL, {
      body: formData,
      method: "post",
    })
      .then((res) => res.json())
      .then((res) => setGiftCards(res.data));
  }, []);

  const buyACard = () => {
    navigate("/info");
  };
  const selectACard = (card) => {
    if (purchaseData.ID === card.ID) setPurchaseData({ ID: null, NAME: null });
    else setPurchaseData(card);
  };

  return (
    <div className={styles.container}>
      <Subheader>подари счастье:</Subheader>
      {giftCards.map((card) => (
        <ProductCard
          name={change_currency_to_symbol(card.NAME)}
          key={card.ID}
          selected={card.ID === purchaseData.ID}
          onClick={() => selectACard(card)}
        />
      ))}
      {purchaseData.ID && (
        <Button style={styles.orderBtn} onClick={buyACard} text={"Оформить"} />
      )}
    </div>
  );
}

export default GiftCardSelectionPage;
