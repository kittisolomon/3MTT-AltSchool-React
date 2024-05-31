import { React } from "react";

const FormEvents = () => {
  // handle change
  const handleChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const elements = event.target.elements;
    const { name, phone, email } = elements;
    alert(
      `Your name is: ${name.value}, with phone number: ${phone.value}, and email: ${email.value} `
    );
  };

  return (
    <section className="form-container">
      <form onSubmit={submitForm}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Enter your name"
          name="name"
          required
        />
        <input
          type="phone"
          onChange={handleChange}
          placeholder="Enter your phone number"
          name="phone"
          required
        />
        <input
          type="email"
          onChange={handleChange}
          placeholder="Enter your email"
          name="email"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default FormEvents;
