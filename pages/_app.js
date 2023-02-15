
import "../styles/globals.css";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="font-iranSans">
        <Component {...pageProps} />
      </main>
    </>

  );
}

export default appWithTranslation(MyApp);
