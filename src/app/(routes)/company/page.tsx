"use client";
// src/components/StakeholderForm.tsx

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  stakeholderName: Yup.string().required("Stakeholder Name is required"),
  shortName: Yup.string().required("Short Name is required"),
  userName: Yup.string().required("User Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  application: Yup.string(),
  userGroup: Yup.string(),
  mobileNumber: Yup.string(),
  telephoneNumber: Yup.string(),
  country: Yup.string(),
  state: Yup.string(),
  city: Yup.string(),
  monthlySmsLimit: Yup.number(),
  dailySmsLimit: Yup.number(),
  lastLoginTime: Yup.date(),
  userTimeZone: Yup.string(),
  createdDate: Yup.date(),
});

interface FormValues {
  stakeholderName: string;
  shortName: string;
  userName: string;
  email: string;
  application?: string;
  userGroup?: string;
  mobileNumber?: string;
  telephoneNumber?: string;
  country?: string;
  state?: string;
  city?: string;
  monthlySmsLimit?: number;
  dailySmsLimit?: number;
  lastLoginTime?: Date;
  userTimeZone?: string;
  createdDate?: Date;
}

// interface StakeholderFormProps {
//   onSubmit: (values: FormValues) => void;
// }

const formFields: { name: keyof FormValues; label: string; type?: string }[] = [
  { name: "stakeholderName", label: "Stakeholder Name" },
  { name: "shortName", label: "Short Name" },
  { name: "userName", label: "User Name" },
  { name: "email", label: "Email" },
  { name: "application", label: "Application" },
  { name: "userGroup", label: "User Group" },
  { name: "mobileNumber", label: "Mobile Number" },
  { name: "telephoneNumber", label: "Telephone Number" },
  { name: "country", label: "Country" },
  { name: "state", label: "State" },
  { name: "city", label: "City" },
  { name: "monthlySmsLimit", label: "Monthly SMS Limit", type: "number" },
  { name: "dailySmsLimit", label: "Daily SMS Limit", type: "number" },
  { name: "lastLoginTime", label: "Last Login Time", type: "datetime-local" },
  { name: "userTimeZone", label: "User Time Zone" },
];

function StakeholderForm() {
  const initialValues: FormValues = {
    stakeholderName: "",
    shortName: "",
    userName: "",
    email: "",
    application: "",
    userGroup: "",
    mobileNumber: "",
    telephoneNumber: "",
    country: "",
    state: "",
    city: "",
    monthlySmsLimit: 0,
    dailySmsLimit: 0,
    lastLoginTime: new Date(),
    userTimeZone: "",
    createdDate: new Date(),
  };
  const onSubmit = (values: FormValues) => {
    console.log({ values });
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="max-w-2xl mx-auto p-4 bg-white rounded shadow-md w-3/5">
        <>
          <h3 className="text-center font-bold px-6 py-4 text-2xl">
            Company Registration Form
          </h3>
          {formFields.map((field) => (
            <div key={field.name} className="mb-4">
              <label
                htmlFor={field.name}
                className="block text-gray-700 font-bold mb-2"
              >
                {field.label}
              </label>
              <Field
                type={field.type || "text"}
                id={field.name}
                name={field.name}
                className="w-full p-2 border rounded"
              />
              <ErrorMessage
                name={field.name}
                component="div"
                className="text-red-500"
              />
            </div>
          ))}

          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded"
            >
              Submit
            </button>
          </div>
        </>
      </Form>
    </Formik>
  );
};

