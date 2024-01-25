import "./App.css";
import Header from "./Components/Header.js/Header";
import Footer from "./Components/Footer.js/Footer";
import HomeScreen from "./Screens/HomeScreen";
import { Container } from "react-bootstrap";
import { Routes, Route } from 'react-router-dom';
import ProductsScreen from "./Screens/ProductsScreen";

function App() {
  return (
    <>
      <main className="">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductsScreen />} />
          </Routes>
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;