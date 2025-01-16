import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  label {
    display: block;
  }

  body {
    background-color: black;
    padding: 40px;
    color: white;
    font-family: "Poppins", serif;
  }

  input {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border: 2px solid #ffa74e;
    border-radius: 4px;
  }

  input:focus {
    outline: none;
    
  }

  /* * {
    border: 1px solid red;
  } */

  form {
    max-width: 700px;
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  h1 {
    letter-spacing: 1px;
    color: #ffa74e;
  }

  h4 {
    color: white;
    font-size: 13px;
  }

  label {
    color: #ffa74e;
    font-weight: 500;
  }

  button {
    cursor: pointer;

  }

  .back-btn {
    color: white;
    background: none;
    border: none;
    font-size: 16px;
    display: flex;
    align-items: center;
    gap: 2px;
    font-weight: 600;
  }

  .back-btn:hover {
    color: #ffa74e;
    
  }

  .submit-btn {
    color: white;
    background: #ffa74e;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 600;
  }

  .submit-btn:hover {
    /* color:  #ffa74e; */
    color:  #e09345;
    background: white;
  }

  .arr-left {
    font-size: 29px;
  }

  .btn-container {
    margin-top: 20px;
    display: flex;
    gap: 150px;
  }

`;

export default GlobalStyles;
