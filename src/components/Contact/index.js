import react, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [errorMessage, setErrorMessage] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  function handleChange(e) {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      console.log(isValid);
      if (!isValid) {
        setErrorMessage("Your email is invalid");
      } else {
        setErrorMessage("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    }
    console.log("errorMessage", errorMessage);
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
  }

  return (
    <section>
      <h1>Contact me</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            defaultValue={name}
            onBlur={handleChange}
            name="name"></input>
          <label htmlFor="name">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            defaultValue={email}
            onBlur={handleChange}
            name="email"></input>
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="form-floating mb-3">
          <textarea
            className="form-control"
            name="message"
            defaultValue={message}
            style={{ height: "200px" }}
            onBlur={handleChange}></textarea>
          <label htmlFor="messageInput">Message</label>
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button
          type="submit"
          style={{ width: "100%" }}
          className="btn btn-primary">
          Submit
        </button>
      </form>

      {/* <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            defaultValue={name}
            onBlur={handleChange}
            name="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            defaultValue={email}
            onBlur={handleChange}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            defaultValue={message}
            onBlur={handleChange}
            srows="5"
          />
        </div>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit">Submit</button>
      </form> */}
    </section>
  );
}

export default Contact;
