import { useCallback, useState } from "react";
import { MotionConfig } from "framer-motion";
import Preloader from "./component/Preloader";
import Portfolio from "./Portfolio";

const PRELOADER_SEEN_KEY = "preloader-seen";

// Show the preloader once per browser session, not on every reload.
function hasSeenPreloader() {
  try {
    return sessionStorage.getItem(PRELOADER_SEEN_KEY) === "1";
  } catch {
    return false;
  }
}

function App() {
  const [loading, setLoading] = useState(() => !hasSeenPreloader());

  const handleFinish = useCallback(() => {
    try {
      sessionStorage.setItem(PRELOADER_SEEN_KEY, "1");
    } catch {
      // Storage unavailable (private mode etc.) — the preloader just shows again next time.
    }
    setLoading(false);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      {loading ? <Preloader onFinish={handleFinish} /> : <Portfolio />}
    </MotionConfig>
  );
}

export default App;
