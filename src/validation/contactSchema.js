// src/validation/contactSchema.ja
import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^09\d{9}$/, "Must start with 09 and be 11 digits")
    .required("Phone is required"),
});
