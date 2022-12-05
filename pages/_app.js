import "../styles/globals.css";
import MasterPage from "../components/MasterPage";

function MyApp({ Component, pageProps }) {
  return (
    <MasterPage>
      {" "}
      <Component {...pageProps} />
    </MasterPage>
  );
}

export default MyApp;
