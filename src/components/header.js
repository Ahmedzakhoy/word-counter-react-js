import classes from "./header.module.css";

function Header() {
  return (
    <header className={classes.header}>
      <span>word counter</span>
      <div>
        count the words in your text by simply pasting it into the text box
      </div>
    </header>
  );
}

export default Header;
