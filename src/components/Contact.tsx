import React, { useRef, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
import { toast } from "react-toastify";

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);

  // State to track errors
  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    messageError: ""
  });

  // Input validation
  const validateInputs = () => {
    const name = form.current?.user_name.value.trim();
    const email = form.current?.user_email.value.trim();
    const message = form.current?.message.value.trim();
    
    let valid = true;
    const newErrors = { nameError: "", emailError: "", messageError: "" };

    if (!name) {
      newErrors.nameError = "Name is required.";
      valid = false;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      newErrors.emailError = "Valid email is required.";
      valid = false;
    }

    if (!message) {
      newErrors.messageError = "Message is required.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateInputs()) return;

    if (form.current) {
      emailjs
        .sendForm(
          "service_7b50p9h",
          "template_s70ar97",
          form.current,
          "ybkbCKu8L-7OBOQry"
        )
        .then(
          (response: EmailJSResponseStatus) => {
            console.log("Email sent successfully!", response.status, response.text);
            toast.success("Email sent successfully!");
            if (form.current) form.current.reset();
            setErrors({ nameError: "", emailError: "", messageError: "" }); 
          },
          (error: any) => {
            console.error("Failed to send email:", error);
            toast.error("Failed to send email. Please try again.");
          }
        );
    }
  };

  return (
    <section className="contact-me" id="contact-me">
      <h2 className="title">Contact Me</h2>
      <p className="description">Get in Touch</p>
      <form ref={form} className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="user_name">
            <i className="fa-solid fa-user"></i>
            Your Name
          </label>
          <input type="text" name="user_name" />
          {errors.nameError && <p className="error-message">{errors.nameError}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="user_email">
            <i className="fa-solid fa-envelope"></i>
            Your Email
          </label>
          <input type="email" name="user_email" />
          {errors.emailError && <p className="error-message">{errors.emailError}</p>}
        </div>

        <div className="input-group">
          <label htmlFor="message">
            <i className="fa-solid fa-comment"></i>
            Your Message
          </label>
          <textarea name="message"></textarea>
          {errors.messageError && <p className="error-message">{errors.messageError}</p>}
        </div>

        <button type="submit" className="btn">
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;