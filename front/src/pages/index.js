import Banner from "../components/Banner";
import Products from "../components/Products";
import Footer from "../components/Footer";
import store from '../store';
import { Provider } from "react-redux";

export default function Home() {
  return (
    <>
      <Banner />
      <Provider store={store}>
        <Products />
      </Provider>
      <Footer />
    </>
  )
}
