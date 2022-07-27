import classes from "./main.module.css";

function Main() {
  return (
    <main className={classes.main}>
      <textarea></textarea>
      <div>
        <div>text details</div>
        <div>
          <span>words</span>
          <span className="words">0</span>
        </div>
        <div>
          <span>characters</span>
          <span className="characters">0</span>
        </div>
        <div>
          <span>sentences</span>
          <span className="sentences">0</span>
        </div>
        <div>
          <span>paragraphs</span>
          <span className="paragraphs">0</span>
        </div>
        <div>
          <span>reading time</span>
          <span className="time">0</span>
        </div>
      </div>
    </main>
  );
}

export default Main;
