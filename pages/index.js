import MessageWrapper from "../components/message-wrapper";
import ReplyWrapper from "../components/reply-wrapper";
import InputBox from "../components/input-box";
import styles from "./index.module.css";
import { useState } from "react";
const Main = () => {
  let [code, setCode] = useState('');
  let [messages, setMessages] = useState([])
  async function callAPI(prompt) {
    let data = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        "content-type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`
      },
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        "messages": [{ "role": "user", "content": prompt }],

        // prompt: prompt,
      })
    })
      .then(res => res.json());
    let response = data?.choices || [];
    if (response?.length > 0 && response[0].message) {
      setMessages(prev => {
        return [...prev, {
          type: 'reply',
          message: response[0].message.content
        }]

      })
    }
    console.log(data);
    return data;
  }

  function explainCode() {
    setMessages(prev => {
      return [...prev, {
        type: 'message',
        message: code
      }]
    })
    callAPI("Explain this code in simple terms: " + code);
  }
  return (
    <div className={styles.main}>
      <nav className={styles.navigationBar}>
        <div className={styles.logo}>
          <img className={styles.logo1Icon} alt="" src="/logo-1@2x.png" />
          <div className={styles.codebuddy}>
            <span className={styles.code}>Code</span>
            <span className={styles.buddy}>Buddy</span>
          </div>
        </div>
      </nav>
      <div className={styles.chatscreen}>
        <div className={styles.chatwrapper}>
          {
            messages?.length>0?
            messages.map((item, i) => {
              if (item.type == 'message')
                return <MessageWrapper
                  key={i}
                  message={item.message}
                />
              else return <ReplyWrapper
                key={i}
                message={item.message}
              />
            }):<div >No messages yet</div>

          }
          {/* <MessageWrapper
            message={`Explain this code: function Component1() {`}
          />
          <ReplyWrapper
            message={`The useState hook allows the creation of a state variable user and a function setUser to update its value. In this case, the initial value of user is "Jesse Hall".`}
          />
          <MessageWrapper
            message={`Check for bugs in this code: function Component1() {`}
          /> */}

        </div>
        <InputBox
          explainCode={explainCode}
         
          code={code}
          setCode={setCode}
        />
      </div>
    </div>
  );
};

export default Main;
