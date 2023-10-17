import Subheader from "../components/subheader/subheader";
import { PurchaseContext } from "../utils/purchase-context";
import { change_currency_to_symbol } from "../utils/text-formating";
import styles from "./payment.module.css";
import { useContext } from "react";

function PaymentPage() {
  const [purchaseData] = useContext(PurchaseContext);
  return (
    <div className={styles.container}>
      <Subheader>Оплачено:</Subheader>
      <p className={styles.text}>{change_currency_to_symbol(purchaseData.NAME)}</p>
    </div>
  );
}

export default PaymentPage;
