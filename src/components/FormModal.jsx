import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../validation/contactSchema";
import { useContacts } from "../context/ContactsContext";

const FormModal = () => {
  const {
    isFormOpen,
    contact,
    editingContactId,
    closeFormHandler,
    saveHandler,
    contacts,
  } = useContacts();
  
  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
    getValues,
  } = useForm({
    resolver: yupResolver(contactSchema(contacts, editingContactId)),
    mode: "onSubmit",
    defaultValues: contact || { name: "", lastName: "", email: "", phone: "" },
  });

  // reset هنگام باز شدن فرم
  useEffect(() => {
    if (isFormOpen) {
      reset(contact || { name: "", lastName: "", email: "", phone: "" });
    }
  }, [contact, isFormOpen, reset]);

  if (!isFormOpen) return null;

  const onSubmit = (data) => {

    console.log("Form Data on Submit:", data);
    console.log("Values from getValues():", getValues());

    let hasError = false;

    const duplicateEmail = contacts.some(
      (c) => c.email === data.email && c.id !== editingContactId
    );
    const duplicatePhone = contacts.some(
      (c) => c.phone === data.phone && c.id !== editingContactId
    );

    if (duplicateEmail) {
      setError("email", { type: "manual", message: "Email already exists" });
      hasError = true;
    }
    if (duplicatePhone) {
      setError("phone", { type: "manual", message: "Phone already exists" });
      hasError = true;
    }

    if (hasError) return;

    saveHandler(data);
  };

  return (
    <div
      onClick={closeFormHandler}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-2xl shadow-lg w-96"
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800 text-center">
          {editingContactId ? "Edit Contact" : "Add Contact"}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            {...register("name")}
            className={`border p-2 rounded-lg ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}

          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName")}
            className={`border p-2 rounded-lg ${
              errors.lastName ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
          )}

          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className={`border p-2 rounded-lg ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <input
            type="text"
            placeholder="09xxxxxxxxx"
            {...register("phone")}
            className={`border p-2 rounded-lg ${
              errors.phone ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}

          <div className="flex justify-end gap-2 mt-4">
            <button
              type="button"
              onClick={closeFormHandler}
              className="bg-gray-200 px-4 py-2 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
