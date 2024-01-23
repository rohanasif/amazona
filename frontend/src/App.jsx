import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./Screens/HomeScreen";

function App() {
  return (
    <>
      <main>
        <Header />
        <Container>
          <HomeScreen />
        </Container>
        <Footer />
      </main>
    </>
  );
}

export default App;
