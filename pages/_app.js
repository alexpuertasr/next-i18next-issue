import { appWithTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState("No mounted yet");

  console.log(state);

  useEffect(() => {
    console.log("Mounting");
    setState("Already mounted");

    return () => {
      console.log("----------");
      console.log("Unmounting");
      console.log("----------");
    };
  }, []);

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
