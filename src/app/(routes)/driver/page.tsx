"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  firstName: string;
  lastName: string;
  driverNumber: string;
  state: string;
  city: string;
  contactNumber: string;
  defaultObjectNo: string;
  password: string;
}

const formFields = [
  { name: 'firstName', label: 'First Name', type: 'text' },
  { name: 'lastName', label: 'Last Name', type: 'text' },
  { name: 'driverNumber', label: 'Driver Number', type: 'text' },
  { name: 'state', label: 'State', type: 'text' },
  { name: 'city', label: 'City', type: 'text' },
  { name: 'contactNumber', label: 'Contact Number', type: 'text' },
  { name: 'defaultObjectNo', label: 'Default Object No', type: 'text' },
  { name: 'password', label: 'Password', type: 'password' },
];

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  driverNumber: '',
  state: '',
  city: '',
  contactNumber: '',
  defaultObjectNo: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  driverNumber: Yup.string().required('Driver Number is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string(),
  contactNumber: Yup.string().required('Contact Number is required'),
  defaultObjectNo: Yup.string(),
  password: Yup.string()
    .min(3, 'Password must be at least 3 characters')
    .max(20, 'Password must not exceed 20 characters')
    .required('Password is required'),
});

const DriverRegistrationForm: React.FC = () => {
  const handleSubmit = (values: FormValues, { setSubmitting }: any) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded shadow-md">
        {formFields.map(field => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block text-gray-700 text-sm font-bold mb-2">
              {field.label}
            </label>
            <Field
              type={field.type}
              id={field.name}
              name={field.name}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:shadow-outline"
            />
            <ErrorMessage
              name={field.name}
              component="p"
              className="text-red-500 text-xs italic mt-1"
            />
          </div>
        ))}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default DriverRegistrationForm;
