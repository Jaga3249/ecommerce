import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/AuthPage/LoginPage";
import SignUpPage from "./pages/AuthPage/SignUpPage";
import WishList from "./pages/WishList/WishList";
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/wishlist" element={<WishList />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};
export default App;
