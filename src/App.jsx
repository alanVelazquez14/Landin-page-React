import { CardsProducts } from "./components/CardsProducts/CardsProducts";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
      <Navbar />
      <Routes />
      <CardsProducts />
      <Footer />
    </Layout>
  );
}

export default App;
