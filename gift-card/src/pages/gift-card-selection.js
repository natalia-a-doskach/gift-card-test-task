import { useEffect, useState } from "react";
import ProductCard from "../components/product-card/product-card";
import useFetch from "react-fetch-hook";
import { BASE_URL } from "../utils/base-api-url";
import { API_KEY } from "../utils/api-key";
import { giftCards } from "../utils/gift-cards-data";
import { useNavigate } from "react-router-dom";
import Subheader from "../components/subheader/subheader";
import styles from "./gift-card-selection.module.css";
import Button from "../components/button/button";

const URL = BASE_URL;

function GiftCardSelectionPage() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState(null);
  useEffect(() => {
    let formData = new FormData();
    formData.append("ApiKey", "011ba11bdcad4fa396660c2ec447ef14");
    formData.append("MethodName", "OSGetGoodList        ");

    fetch(URL, {
      body: formData,
      method: "post",
    });
  }, []);

  const buyACard = (id) => {
    navigate("/info");
  };
  const selectACard = (id) => {
    if (!selectedId) setSelectedId(id);
    else setSelectedId(null);
  };

  return (
    <div className={styles.container}>
      <Subheader>подари счастье:</Subheader>
      {giftCards.map((card) => (
        <ProductCard
          {...card}
          selected={card.id == selectedId}
          onClick={() => selectACard(card.id)}
        />
      ))}
      {selectedId && (
        <Button
          style={styles.orderBtn}
          onClick={() => buyACard(selectedId)}
          text={"Оформить"}
        />
      )}
    </div>
  );
}

export default GiftCardSelectionPage;
