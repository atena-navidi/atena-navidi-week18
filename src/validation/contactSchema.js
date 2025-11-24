import * as Yup from "yup";

export const contactSchema = (contacts, editingContactId) =>
  Yup.object().shape({
    name: Yup.string().trim().required("Name is required"),
    lastName: Yup.string().trim().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email")
      .required("Email is required")
      .test("unique-email", "Email already exists", (value) => {
        if (!value) return true;
        return !contacts.some(
          (c) =>
            c.email === value &&
            (editingContactId ? c.id !== editingContactId : true)
        );
      }),
    phone: Yup.string()
      .matches(/^09\d{9}$/, "Must start with 09 and be 11 digits")
      .required("Phone is required")
      .test("unique-phone", "Phone already exists", (value) => {
        if (!value) return true;
        return !contacts.some(
          (c) =>
            c.phone === value &&
            (editingContactId ? c.id !== editingContactId : true)
        );
      }),
  });
