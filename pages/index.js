import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Home() {
  const [emailValue, setEmailValue] = useState("");
  const router = useRouter();
  const handleSubmit = async () => {
    // encrypt the entered email address

    const resp = await fetch(`/api/email/${emailValue}`);
    const data = await resp.json();

    let encryptedEmail = data.email

    //Go to the consumer
    router.push({
      pathname: "http://localhost:3001/email",
      query: { email: encryptedEmail },
    });
  };

  return (
    <div className={styles.outerContainer}>
      <input
        type="text"
        value={emailValue}
        onChange={(e) => {
          setEmailValue(e.target.value);
        }}
      />
      <input type="submit" onClick={handleSubmit} />
    </div>
  );
}
