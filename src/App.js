import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/landingPage/home";
import About from "./components/landingPage/about";
import Contact from "./components/landingPage/contact";
import ProductCatalog from "./components/POS/productCatalog";
import ShoppingCart from "./components/POS/shoppingCart";
import PurchaseSuccess from "./components/POS/PurchaseSuccess";
import OrderHistory from "./components/POS/OrderHistory";
import Footer from "./components/footer";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import CustomAlert from "./components/Alert";
import './App.css';

const initialProducts = [
  {
    id: 1,
    label: "Semen Tiga Roda",
    name: "Semen 50kg",
    category: "Semen",
    price: 65000,
    stock: 100,
    image: "/images/semen-tigaroda.jpg",
    discount: 0.1,
    totalSold: 0,
  },
  {
    id: 2,
    label: "Bata Merah",
    name: "Bata Merah",
    category: "Bata",
    price: 800,
    stock: 1000,
    image: "/images/bata-merah.jpg",
    discount: 0.05,
    totalSold: 0,
  },
  {
    id: 3,
    label: "Cat Dulux",
    name: "Cat Tembok 5kg",
    category: "Cat",
    price: 120000,
    stock: 40,
    image: "/images/cat-dulux.jpg",
    discount: 0.08,
    totalSold: 0,
  },
  {
    id: 4,
    label: "Pipa PVC Rucika",
    name: "Pipa PVC 3 Inch",
    category: "Pipa",
    price: 35000,
    stock: 150,
    image: "/images/pipa-pvc.jpg",
    totalSold: 0,
  },
  {
    id: 5,
    label: "Keramik Roman",
    name: "Keramik Lantai 40x40",
    category: "Keramik",
    price: 60000,
    stock: 200,
    image: "/images/keramik-roman.jpg",
    discount: 0.15,
    totalSold: 0,
  },
  {
    id: 6,
    label: "Semen Tiga Roda",
    name: "Semen 40kg",
    category: "Semen",
    price: 62000,
    stock: 80,
    image: "/images/semen-tigaroda.jpg",
    discount: 0.07,
    totalSold: 0,
  },
  {
    id: 7,
    label: "Cat Avian",
    name: "Cat Kayu 1kg",
    category: "Cat",
    price: 45000,
    stock: 60,
    image: "/images/cat-kayu.jpg",
    discount: 0.05,
    totalSold: 0,
  },
  {
    id: 8,
    label: "Bata Putih",
    name: "Bata Putih",
    category: "Bata",
    price: 900,
    stock: 700,
    image: "/images/bata-putih.jpg",
    discount: 0.03,
    totalSold: 0,
  },
  {
    id: 9,
    label: "Keramik Platinum",
    name: "Keramik Dinding 25x40",
    category: "Keramik",
    price: 50000,
    stock: 120,
    image: "/images/keramik-dinding.jpg",
    discount: 0.1,
    totalSold: 0,
  },
  {
    id: 10,
    label: "Pipa PVC Vinilon",
    name: "Pipa PVC 2 Inch",
    category: "Pipa",
    price: 25000,
    stock: 200,
    image: "/images/pipa-pvc.jpg",
    totalSold: 0,
  },
  {
    id: 12,
    label: "Pasir Hitam Bangunan",
    name: "Pasir Hitam 1 Truk",
    category: "Pasir",
    price: 850000,
    stock: 5,
    image: "/images/pasir-hitam.jpg",
    totalSold: 0,
  },
   {
    id: 13,
    label: "Semen Tiga Roda",
    name: "Semen 30kg",
    category: "Semen",
    price: 59000,
    stock: 50,
    image: "/images/semen-tigaroda.jpg",
    discount: 0.07,
    totalSold: 0,
  },
    {
    id: 14,
    label: "Pipa PVC Vinilon",
    name: "Pipa PVC 4 Inch",
    category: "Pipa",
    price: 35000,
    stock: 50,
    image: "/images/pipa-pvc.jpg",
    totalSold: 0,
  },
  {
    id: 15,
    label: "Pasir Hitam Bangunan",
    name: "Pasir Hitam 1/2 Truk",
    category: "Pasir",
    price: 450000,
    stock: 5,
    image: "/images/pasir-hitam.jpg",
    totalSold: 0,
  },
  {
    id: 16,
    label: "Semen Tiga Roda",
    name: "Semen 20kg",
    category: "Semen",
    price: 57000,
    stock: 20,
    image: "/images/semen-tigaroda.jpg",
    discount: 0.07,
    totalSold: 0,
  },
    {
    id: 17,
    label: "Pasir Hitam Bangunan",
    name: "Pasir Hitam 2 Truk",
    category: "Pasir",
    price: 1300000,
    stock: 5,
    image: "/images/pasir-hitam.jpg",
    totalSold: 0,
  },
];

const STORAGE_KEY = "products";

function AppContent() {
  const navigate = useNavigate();
  const [products, setProducts] = useState(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [lastOrder, setLastOrder] = useState(null);
  const [pendingCheckout, setPendingCheckout] = useState(null);
  const [showLogoutAlert, setShowLogoutAlert] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("logged_in_user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleLogin = (userObj) => {
    setUser(userObj);
    localStorage.setItem("logged_in_user", JSON.stringify(userObj));
    setShowLogin(false);
    if (pendingCheckout) {
      handleCheckout(pendingCheckout, true);
      setPendingCheckout(null);
      navigate("/success");
    }
  };

  const handleRegister = (userObj) => {
    setUser(userObj);
    localStorage.setItem("logged_in_user", JSON.stringify(userObj));
    setShowRegister(false);
  };

  // Ganti jadi buka alert
  const handleLogoutClick = () => {
    setShowLogoutAlert(true);
  };

  const confirmLogout = () => {
    setShowLogoutAlert(false);
    setUser(null);
    localStorage.removeItem("logged_in_user");
    navigate("/");
  };

  const cancelLogout = () => {
    setShowLogoutAlert(false);
  };

  const handleAddToCart = (product) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === product.id && p.stock > 0) {
          return {
            ...p,
            stock: p.stock - 1,
            totalSold: (p.totalSold || 0) + 1,
          };
        }
        return p;
      })
    );
    setCart((prevCart) => {
      const item = prevCart.find((i) => i.product.id === product.id);
      if (item) {
        return prevCart.map((i) =>
          i.product.id === product.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...prevCart, { product, qty: 1 }];
    });
  };

  const handleRemoveItem = (productId) => {
    const itemInCart = cart.find((item) => item.product.id === productId);
    if (!itemInCart) return;
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            stock: p.stock + 1,
            totalSold: (p.totalSold || 0) - 1,
          };
        }
        return p;
      })
    );
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.product.id === productId ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  const getProductData = (id) => products.find((p) => p.id === id);
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  const handleCheckout = ({ shippingAddress, paymentMethod }, force = false) => {
    if (!user && !force) {
      setPendingCheckout({ shippingAddress, paymentMethod });
      setShowLogin(true);
      return;
    }

    const orderItems = cart.map(item => ({
      name: item.product.name,
      qty: item.qty,
      price: item.product.price,
      discount: item.product.discount || 0,
    }));

    const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.qty, 0);
    const totalDiscount = cart.reduce(
      (acc, item) =>
        acc +
        (item.product.discount
          ? item.product.price * item.product.discount * item.qty
          : 0),
      0
    );
    const total = subtotal - totalDiscount;

    const orderData = {
      items: orderItems,
      paymentMethod,
      shippingAddress,
      total,
      date: new Date().toISOString()
    };

    setLastOrder(orderData);
    setCart([]);
    setProducts(prevProducts =>
      prevProducts.map(prod => ({
        ...prod,
        totalSold: 0
      }))
    );
    // Simpan history order per user
    if ((user || force) && (user?.username || pendingCheckout)) {
      const username = user?.username || pendingCheckout?.username;
      if (username) {
        const key = `orders_${username}`;
        const prevOrders = JSON.parse(localStorage.getItem(key) || "[]");
        localStorage.setItem(key, JSON.stringify([orderData, ...prevOrders]));
      }
    }
    if (user || force) {
      navigate("/success");
    }
  };

  return (
    <>
      <Navbar
        cartCount={cartCount}
        user={user}
        onLoginClick={() => setShowLogin(true)}
        onLogout={handleLogoutClick}
        onRegisterClick={() => setShowRegister(true)}
      />
      <Login
        show={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
        onRegisterClick={() => {
          setShowLogin(false);
          setShowRegister(true);
        }}
      />
      <Register
        show={showRegister}
        onClose={() => setShowRegister(false)}
        onRegister={handleRegister}
      />
      <CustomAlert
        show={showLogoutAlert}
        title="Konfirmasi Logout"
        message="Apakah Anda yakin ingin logout?"
        confirmText="Logout"
        cancelText="Batal"
        onConfirm={confirmLogout}
        onCancel={cancelLogout}
      />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/catalog"
            element={
              <ProductCatalog
                products={products}
                onAddToCart={handleAddToCart}
                getProductData={getProductData}
                cartCount={cartCount}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <ShoppingCart
                cart={cart.map((item) => ({
                  ...item,
                  product: getProductData(item.product.id),
                }))}
                onRemoveItem={handleRemoveItem}
                onCheckout={handleCheckout}
                user={user}
              />
            }
          />
          <Route
            path="/success"
            element={<PurchaseSuccess order={lastOrder} />}
          />
          <Route
            path="/history"
            element={<OrderHistory user={user} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <AppContent />
      </div>
    </Router>
  );
}