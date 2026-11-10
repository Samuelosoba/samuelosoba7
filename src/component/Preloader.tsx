import { useEffect, useState } from "react";

type Line = {
  key: string;
  value: string;
};

type PreloaderProps = {
  onFinish: () => void;
};

const lines: Line[] = [
  { key: "name", value: "Samuel Osoba" },
  { key: "title", value: "Portfolio" },
  { key: "role", value: "Fullstack Developer" },
];

// Total time on screen is roughly 400ms of loading + 250ms hold.
const LINE_DELAY_MS = 120;
const PROGRESS_STEP = 5;
const PROGRESS_INTERVAL_MS = 20;
const HOLD_MS = 250;

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [lineCount, setLineCount] = useState(0);

  // Typing animation
  useEffect(() => {
    if (lineCount >= lines.length) return;
    const timeout = setTimeout(
      () => setLineCount((prev) => prev + 1),
      LINE_DELAY_MS,
    );
    return () => clearTimeout(timeout);
  }, [lineCount]);

  // Loading counter
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => Math.min(prev + PROGRESS_STEP, 100));
    }, PROGRESS_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress < 100) return;
    const timeout = setTimeout(onFinish, HOLD_MS);
    return () => clearTimeout(timeout);
  }, [progress, onFinish]);

  return (
    <div className="preloader" role="status" aria-label="Loading portfolio">
      <div className="editor" aria-hidden="true">
        <div className="dots">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <pre className="code">
          {"{\n"}

          {lines.slice(0, lineCount).map((line) => (
            <div key={line.key}>
              {"  "}
              <span className="key">"{line.key}"</span>
              <span className="colon">: </span>
              <span className="string">"{line.value}"</span>
              {","}
            </div>
          ))}

          {lineCount === lines.length && (
            <div>
              {"  "}
              <span className="key">"loading"</span>
              <span className="colon">: </span>
              <span className="number">"{progress}%"</span>
            </div>
          )}

          {"\n}"}
        </pre>
      </div>
    </div>
  );
};

export default Preloader;
