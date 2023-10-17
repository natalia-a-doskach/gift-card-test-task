import styles from "./App.module.css";
import { useState } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PaymentPage from "./pages/payment";
import GiftCardSelectionPage from "./pages/gift-card-selection";
import PersonalInfoPage from "./pages/personal-info";
import BrandPicture from "./components/brand-picture/brand-picture";
import { PurchaseContext } from "./utils/purchase-context";

function App() {
  const purchaseData = useState({ ID: null, NAME: null });
  return (
    <PurchaseContext.Provider value={purchaseData}>
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
          <BrandPicture />
        </div>
      </div>
    </PurchaseContext.Provider>
  );
}

export default App;
