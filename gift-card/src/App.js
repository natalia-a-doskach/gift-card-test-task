import logo from './logo.svg';
import styles from "./App.module.css";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import PaymentPage from './pages/payment';
import GiftCardSelectionPage from './pages/gift-card-selection';
import PersonalInfoPage from './pages/personal-info';
import BrandPicture from './components/brand-picture/brand-picture';

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.mainPageContainer}>
      <BrowserRouter>
          <Routes>
            <Route path="/shop" element={<GiftCardSelectionPage />} />
            <Route path="/info" element={<PersonalInfoPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="*" element={<Navigate to="/shop" replace />} />
          </Routes>
      </BrowserRouter>
      </div>
      <div className={styles.imageContainer}>
      <BrandPicture/>
      </div>
    </div>
  );
}

export default App;