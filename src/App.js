import { ConsoleReporter } from "jasmine";
import { useState } from "react";
import "./App.css";

const initialFormState = {
  fullName: "",
  address: "",
  phoneNumber: "",
  email: "",
  complaint: "",
  contact: "",
  consent: false,
};

export default function App() {
  //TODO: Add your state fields here

  const [formState, setFormState] = useState(initialFormState);

  const handleSumbit = (event) => {
    event.preventDefault();
    console.log(formState);
    setFormState(initialFormState);
  };

  const handleChange = (event) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log(formState);
      setFormState(initialFormState);
    };

    const handleChange = (event) => {
      const value = event.target.value;
      const name = event.target.name;
      const checked = event.target.ckecked;

      const newFormState = { ...formState };

      if (name === "fullName") {
        newFormState.fullName = value;
      }
      if (name === "address") {
        newFormState.address = value;
      }
      if (name === " phoneNumber") {
        newFormState.phoneNumber = value;
      }
      if (name === "email") {
        newFormState.email = value;
      }
      if (name === " complaint") {
        newFormState.complaint = value;
      }
      if (name === "contact") {
        newFormState.contact = value;
      }
      if (name === "consent") {
        newFormState.consent = checked;
      }
      if (name === " sumbit") {
        console.log("submit");
      }
      setFormState(newFormState);
    };

    return (
      <>
        <form className="form" onSubmit={handleSubmit}>
          <h2>Complaining form!</h2>
          <div className="form__section-left">
            <label>
              Full name
              <input
                type="text"
                value={formState.fullName}
                name="fullName"
                required
                onChange={handleChange}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                value={formState.address}
                name="address"
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                name="phone"
                value={formState.phoneNumber}
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                type="email"
                value={formState.email}
                name="email"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="form__section-right">
            <label>
              Write your complaint
              <textarea
                name="complaint"
                rows="10"
                placeholder="You can complain here"
                value={formState.complaint}
                onChange={handleChange}
              ></textarea>
            </label>

            <div className="form__radio-group">
              <p>How do you want to be contacted? </p>
              <label>
                <input type="radio" name="contact" value="phone" />
                <input
                  type="radio"
                  name="contact"
                  value="phone"
                  checked={formState.contact === "phone"}
                  onChange={handleChange}
                />
                Phone
              </label>

              <label>
                <input type="radio" name="contact" value="email" />
                <input
                  type="radio"
                  name="contact"
                  value="email"
                  checked={formState.contact === "email"}
                  onChange={handleChange}
                />
                Email
              </label>

              <label>
                <input type="radio" name="contact" value="post" />
                <input
                  type="radio"
                  name="contact"
                  value="post"
                  checked={formState.contact === "post"}
                  onChange={handleChange}
                />
                Slow Mail
              </label>

              <label>
                <input type="radio" name="contact" value="none" />
                <input
                  type="radio"
                  name="contact"
                  value="none"
                  checked={formState.contact === "none"}
                  onChange={handleChange}
                />
                No contact!
              </label>
            </div>

            <label>
              I agree you take my data, and do whatever
              <input type="checkbox" name="consent" id="consent" />
            </label>
          </div>
          <input type="submit" value="Submit!" />
        </form>
      </>
    );
  };
}
