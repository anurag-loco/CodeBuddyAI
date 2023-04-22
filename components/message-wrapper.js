import styles from "./message-wrapper.module.css";
const MessageWrapper = ({ message }) => {
  return (
    <div className={styles.messagewrapper}>
      <div className={styles.messagewrapper1}>
        <div className={styles.explainThisCodeContainer}>
          <p className={styles.explainThisCode}>{message}</p>
          
        </div>
      </div>
    </div>
  );
};

export default MessageWrapper;
