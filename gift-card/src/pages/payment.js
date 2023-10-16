import Subheader from "../components/subheader/subheader";
import styles from "./payment.module.css";

function PaymentPage() {
    return (
      <div className={styles.container}>
          <Subheader>Оплачено</Subheader>
      </div>
    );
  }
  
  export default PaymentPage;