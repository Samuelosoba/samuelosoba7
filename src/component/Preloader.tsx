import { useEffect, useState } from "react";

type Line = {
  key: string;
  value: string;
};

type PreloaderProps = {
  onFinish: () => void;
};

const lines: Line[] = [
  { key: "name", value: "Osoba Samuel" },
  { key: "title", value: "Portfolio" },
  { key: "role", value: "Fullstack Developer" },
];

const Preloader: React.FC<PreloaderProps> = ({ onFinish }) => {
  const [progress, setProgress] = useState<number>(0);
  const [displayedLines, setDisplayedLines] = useState<Line[]>([]);
  const [currentLine, setCurrentLine] = useState<number>(0);

  // Typing animation
  useEffect(() => {
    if (currentLine < lines.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, lines[currentLine]]);
        setCurrentLine((prev) => prev + 1);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  // Loading animation
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="preloader">
      <div className="editor">
        <div className="dots">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <pre className="code">
          {"{\n"}

          {displayedLines.map((line, index) => (
            <div key={index}>
              {"  "}
              <span className="key">"{line.key}"</span>
              <span className="colon">: </span>
              <span className="string">"{line.value}"</span>
              {","}
            </div>
          ))}

          {displayedLines.length === lines.length && (
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
