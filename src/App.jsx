import { Toaster } from "sonner";
import { Footer } from "./components/Footer/Footer";
import { Layout } from "./components/Layout/Layout";
import Routes from "./routes/Routes";

function App() {
  return (
    <Layout>
      <Toaster richColors closeButton />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
