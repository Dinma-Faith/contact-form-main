import { useState } from "react";
import InputField from "./InputField";
import RadioGroup from "./RadioGroup";
import TextAreaField from "./TextAreaField";
import CheckboxField from "./CheckboxField";
import SuccessMessage from "./SuccessMessage";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "This field is required";
    if (!formData.lastName.trim()) newErrors.lastName = "This field is required";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email))
      newErrors.email = "Please enter a valid email address";

    if (!formData.queryType) newErrors.queryType = "Please select a query type";
    if (!formData.message.trim()) newErrors.message = "This field is required";
    if (!formData.consent) newErrors.consent = "To submit this form, please consent to be contacted";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <>
      {submitted && <SuccessMessage />}
      <div className="container">
        <h1 className="h1">Contact Us</h1>
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex-container">
            <InputField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={errors.firstName}
            />
            <InputField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={errors.lastName}
            />
          </div>
          <InputField
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <RadioGroup
            selected={formData.queryType}
            onChange={handleChange}
            error={errors.queryType}
          />
          <TextAreaField
            value={formData.message}
            onChange={handleChange}
            error={errors.message}
          />
          <CheckboxField
            checked={formData.consent}
            onChange={handleChange}
            error={errors.consent}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
