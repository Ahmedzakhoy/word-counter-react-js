import { useState } from "react";
import classes from "./main.module.css";

function Main() {
  const [charCount, setCharCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [paragraphCount, setParagraphCount] = useState(0);
  const [readingTimeMin, setReadingTimeMin] = useState(0);
  const [readingTimeHour, setReadingTimeHour] = useState(0);
  const inputChangeHandler = (event) => {
    const text = event.target.value;
    const characterNumber = text.split("").length;
    const wordsNumber = text.split(/[;:.\s]+/).length;
    const sentenceNumber = text.split(".").length;
    const paragraphsNumber = text.split(".\n").length;
    const readingT = wordsNumber / 250;
    const readingTHour = Math.trunc(readingT / 60);
    const readingTMin = readingT % 60;
    setWordCount(wordsNumber);
    setCharCount(characterNumber);
    setSentenceCount(sentenceNumber);
    setParagraphCount(paragraphsNumber);
    setReadingTimeHour(readingTHour);
    setReadingTimeMin(readingTMin);
    if (text === "") {
      setWordCount(0);
      setCharCount(0);
      setSentenceCount(0);
      setParagraphCount(0);
      setReadingTimeHour(0);
      setReadingTimeMin(0);
    }
  };
  return (
    <main className={classes.main}>
      <textarea onChange={inputChangeHandler}></textarea>
      <div>
        <div>text details</div>
        <div>
          <span>words</span>
          <span className="words">{wordCount}</span>
        </div>
        <div>
          <span>characters</span>
          <span className="characters">{charCount}</span>
        </div>
        <div>
          <span>sentences</span>
          <span className="sentences">{sentenceCount}</span>
        </div>
        <div>
          <span>paragraphs</span>
          <span className="paragraphs">{paragraphCount}</span>
        </div>
        <div>
          <span>reading time</span>
          <span className="time">
            {readingTimeHour} H : {readingTimeMin.toFixed(0)} MIN
          </span>
        </div>
      </div>
    </main>
  );
}

export default Main;
