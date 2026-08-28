import { useEffect, useMemo, useState } from "react";

export function TypingEffect({
  words = [
    "Problem Solver",
    "Full-Stack Developer",
    "Web Developer",
    "Software Engineering Student",
  ],
}: {
  words?: string[];
}) {
  const safeWords = useMemo(() => words.filter(Boolean), [words]);
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!safeWords.length) return;

    const word = safeWords[wordIndex % safeWords.length];
    const finishedTyping = !deleting && text === word;
    const finishedDeleting = deleting && text === "";

    const delay = finishedTyping
      ? 1250
      : finishedDeleting
        ? 220
        : deleting
          ? 42
          : 78;

    const timer = window.setTimeout(() => {
      if (finishedTyping) {
        setDeleting(true);
        return;
      }

      if (finishedDeleting) {
        setDeleting(false);
        setWordIndex((i) => (i + 1) % safeWords.length);
        return;
      }

      setText(word.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [deleting, safeWords, text, wordIndex]);

  return (
    <span
      className="typing-line"
      aria-live="polite"
      style={{
        whiteSpace: "nowrap",
        display: "inline-flex",
        maxWidth: "100%",
        overflow: "hidden",
        verticalAlign: "middle",
      }}
    >
      <span style={{ whiteSpace: "pre" }}>{text}</span>
      <span className="typing-caret" aria-hidden="true" />
    </span>
  );
}
