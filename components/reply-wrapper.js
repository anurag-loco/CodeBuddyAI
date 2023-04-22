import styles from "./reply-wrapper.module.css";
const ReplyWrapper = ({ message }) => {
  return (
    <div className={styles.replywrapper}>
      <div className={styles.messagewrapper}>
        <div className={styles.theUsestateHookContainer}>
          <p className={styles.theUsestateHook}>{message}</p>
         
        </div>
      </div>
    </div>
  );
};

export default ReplyWrapper;
