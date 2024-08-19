import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
      <Routes/>
      <Footer />
    </Layout>
  );
}

export default App;
