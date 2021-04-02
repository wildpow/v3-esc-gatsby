/* eslint-disable react/jsx-curly-newline */
import React from "react"

// import { useReducer } from "react";
// import styled from "styled-components";
// import { navigate } from "gatsby";
// import {
//   colors,
//   spacing,
//   fontSize,
//   breakpoints,
//   radius,
// } from "../../utils/styles";
// import { PrimaryButton } from "../shared/Buttons";
// import SendIcon from "../../assets/paper-plane-solid.svg";
// import ResetIcon from "../../assets/redo-solid.svg";

// const FormRoot = styled.form`
//   border-radius: ${radius.large}px;
//   padding: ${spacing["1"]};
//   fieldset {
//     border: none;
//   }
//   .container {
//     display: flex;
//     justify-content: space-between;
//     flex-direction: column;
//   }

//   label {
//     display: flex;
//     flex-direction: column;
//   }
//   textarea {
//     min-height: 150px;
//     font-size: ${fontSize.base};
//     padding: ${spacing[2]};
//     border: 1px solid ${colors.gray["500"]};
//     resize: none;
//     outline: none;
//     :focus {
//       box-shadow: 0px 5px 5px 0px ${colors.gray["500"]};
//       outline: 0;
//       transition: box-shadow 0.15s ease-in-out;
//     }
//   }
//   .input-label {
//     input:-internal-autofill-selected {
//       background-color: transparent;
//     }
//     input:-webkit-autofill,
//     input:-webkit-autofill:hover,
//     input:-webkit-autofill:focus,
//     textarea:-webkit-autofill,
//     textarea:-webkit-autofill:hover,
//     textarea:-webkit-autofill:focus,
//     select:-webkit-autofill,
//     select:-webkit-autofill:hover,
//     select:-webkit-autofill:focus {
//       border: 1px solid ${colors.blue[900]};
//       -webkit-text-fill-color: ${colors.blue[800]};
//       box-shadow: 0 0 0px 1000px transparent inset;
//       transition: background-color 5000s ease-in-out 0s;
//     }

//     width: 100%;
//     font-size: ${fontSize.sm};
//     span {
//       padding-bottom: ${spacing[1]};
//       color: ${colors.gray[900]};
//     }
//     input {
//       width: 100%;
//       padding: 10px 5px;
//       font-size: 16px;
//       color: ${colors.gray["900"]};
//       margin-bottom: 30px;
//       border: 1px solid ${colors.gray["500"]};
//       outline: none;
//       :focus {
//         box-shadow: 0px 5px 5px 0px ${colors.gray["500"]};
//         outline: 0;
//         transition: box-shadow 0.15s ease-in-out;
//       }
//     }
//   }

//   .bottom-buttons {
//     display: flex;
//     justify-content: space-between;
//     padding-top: ${spacing["8"]};
//   }

//   @media (min-width: ${breakpoints.sm}) {
//     border: 1px solid ${colors.gray["300"]};
//     border-radius: ${radius.large}px;
//     padding: ${spacing["6"]};
//     .container {
//       flex-direction: row;
//       justify-content: space-between;
//     }
//     .input-label {
//       width: 45%;
//     }
//     .message {
//       font-size: ${fontSize["2xl"]};
//     }
//     textarea {
//       padding: ${spacing[6]};
//     }
//   }
//   @media (min-width: ${breakpoints.lg}) {
//     .input-label {
//       font-size: ${fontSize.base};
//       font-weight: 700;
//       span {
//         padding-left: 2px;
//       }
//       input {
//         padding: 15px 10px;
//         font-size: ${fontSize.lg};
//       }
//     }
//     textarea {
//       font-size: ${fontSize.lg};
//     }
//   }
// `;

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  tel: "",
  type: "",
  message: "",
}
const reducer = (state, action) => {
  switch (action.type) {
    case "firstName":
      return { ...state, firstName: action.payload }
    case "lastName":
      return { ...state, lastName: action.payload }
    case "email":
      return { ...state, email: action.payload }
    case "tel":
      return { ...state, tel: action.payload }
    case "type":
      return { ...state, type: action.payload }
    case "message":
      return { ...state, message: action.payload }
    case "reset":
      return { ...initialState }
    default:
      throw new Error()
  }
}
// const FormButtons = styled(PrimaryButton)`
//   padding-right: 20px;
//   padding-left: 20px;
// `;

const encode = data => {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&")
}
const ContactUsForm = () => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({
  //       "form-name": form.getAttribute("name"),
  //       ...state,
  //     }),
  //   })
  //     .then(() => navigate(form.getAttribute("action")))
  //     .catch((error) => alert(error));
  // };
  return (
    // <FormRoot
    //   name="contact"
    //   method="post"
    //   action="/thank-you"
    //   data-netlify="true"
    //   data-netlify-honeypot="bot-field"
    //   onSubmit={handleSubmit}
    // >
    //   <input type="hidden" name="form-name" value="contact" />
    //   <p hidden>
    //     <label htmlFor="bot-field">
    //       Don’t fill this out:
    //       <input
    //         name="bot-field"
    //         onChange={() => console.log("Don’t fill this out")}
    //       />
    //     </label>
    //   </p>

    //   <fieldset>
    //     <div className="container">
    //       <label htmlFor="firstName" id="firstName" className="input-label">
    //         <span>Fist Name</span>
    //         <input
    //           placeholder="Percival"
    //           required
    //           type="text"
    //           id="firstName"
    //           name="firstName"
    //           autoComplete="given-name"
    //           value={state.firstName}
    //           onChange={(e) =>
    //             dispatch({ type: "firstName", payload: e.target.value })
    //           }
    //         />
    //       </label>

    //       <label htmlFor="lastName" id="lastName" className="input-label">
    //         <span>Last Name</span>
    //         <input
    //           required
    //           type="text"
    //           id="lastName"
    //           name="lastName"
    //           autoComplete="family-name"
    //           placeholder="Panda"
    //           value={state.lastName}
    //           onChange={(e) =>
    //             dispatch({ type: "lastName", payload: e.target.value })
    //           }
    //         />
    //       </label>
    //     </div>
    //     <div className="container">
    //       <label htmlFor="tel" className="input-label">
    //         <span>Phone</span>
    //         <input
    //           autoComplete="tel-national"
    //           pattern="^[0-9-+s()]*$"
    //           type="tel"
    //           name="tel"
    //           placeholder="***-***-****"
    //           value={state.tel}
    //           onChange={(e) =>
    //             dispatch({ type: "tel", payload: e.target.value })
    //           }
    //         />
    //       </label>
    //       <label htmlFor="email" className="input-label">
    //         <span>Email</span>
    //         <input
    //           required
    //           placeholder="youremail@email.com"
    //           type="email"
    //           name="email"
    //           autoComplete="email"
    //           value={state.email}
    //           onChange={(e) =>
    //             dispatch({ type: "email", payload: e.target.value })
    //           }
    //         />
    //       </label>
    //     </div>

    //     <label htmlFor="message" className="message">
    //       <textarea
    //         onChange={(e) =>
    //           dispatch({ type: "message", payload: e.target.value })
    //         }
    //         placeholder="Enter your message here..."
    //         required
    //         type="text"
    //         value={state.message}
    //         name="message"
    //       />
    //     </label>
    //     <div className="bottom-buttons">
    //       <FormButtons
    //         danger
    //         type="button"
    //         onClick={() => dispatch({ type: "reset" })}
    //       >
    //         Reset
    //         <ResetIcon />
    //       </FormButtons>
    //       <FormButtons type="submit">
    //         Submit
    //         <SendIcon />
    //       </FormButtons>
    //     </div>
    //   </fieldset>
    // </FormRoot>
    <div>feewfef</div>
  )
}

export default ContactUsForm
