import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";
import { useState } from "react";
import CryptoJS from "crypto-js";

export default function Home() {
  const [emailValue, setEmailValue] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    // encrypt the entered email address
    let encrypted = CryptoJS.AES.encrypt(emailValue, process.env.key);

    //Go to the consumer
    router.push({
      pathname: "http://localhost:3001/email",
      query: { email: encrypted.toString() },
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
