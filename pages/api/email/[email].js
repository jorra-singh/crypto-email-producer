import CryptoJS from "crypto-js";
export default function userHandler(req, res) {
  const {
    query: { email },
  } = req;


  let encrypted = CryptoJS.AES.encrypt(email, process.env.key);
  res.status(200).json({ email: encrypted.toString().replaceAll('/','_').replaceAll('+', '-') });
}
