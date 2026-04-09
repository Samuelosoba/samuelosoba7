import { useState } from "react";
import Preloader from "./component/Preloader";
import Portfolio from "./Portfolio";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader onFinish={() => setLoading(false)} />}
      {!loading && <Portfolio />}
    </>
  );
}

export default App;
