import styles from "./input-box.module.css";
const InputBox = ({ code, setCode, explainCode }) => {
  return (
    <div className={styles.inputwrapper}>
      <input
        className={styles.input}
        type="text"
        placeholder="Write code here..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <div className={styles.buttonwrapper}>
        
        <button
          onClick={explainCode}
          className={styles.btnexplain}>
          <div className={styles.explain}>Explain</div>
        </button>
      </div>
    </div>
  );
};

export default InputBox;
