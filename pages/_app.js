import "../styles/globals.css";
import MasterPage from "../components/MasterPage";
import { Provider } from "react-redux";
import store from "../store/index";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <MasterPage>
        {" "}
        <Component {...pageProps} />
      </MasterPage>
    </Provider>
  );
}

export default MyApp;
