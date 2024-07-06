import { CardsProducts } from "./components/CardsProducts/CardsProducts";
import { Footer } from "./components/Footer/Footer";
import { Hero } from "./components/Hero/Hero";
import { Layout } from "./components/Layout/Layout";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Layout>
        <Hero/>
        <CardsProducts/>
      </Layout>
      <Footer/>
    </>
  );
}

export default App;
