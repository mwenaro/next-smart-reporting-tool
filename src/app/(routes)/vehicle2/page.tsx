"use client"
import React from 'react';
import { Formik, Field, Form, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

interface FormField {
  name: string;
  label: string;
  type: string;
}

interface FormValues {
  firstName: string;
  lastName: string;
  driverNumber: string;
  state: string;
  city: string;
  contactNumber: string;
  defaultObjectNo: string;
  _currentStep: number;
}

const formSections: FormField[][] = [
  [
    { name: 'firstName', label: 'First Name', type: 'text' },
    { name: 'lastName', label: 'Last Name', type: 'text' },
    { name: 'driverNumber', label: 'Driver Number', type: 'text' },
  ],
  [
    { name: 'state', label: 'State', type: 'text' },
    { name: 'city', label: 'City', type: 'text' },
    { name: 'contactNumber', label: 'Contact Number', type: 'text' },
  ],
  [
    { name: 'defaultObjectNo', label: 'Default Object No', type: 'text' },
    // Add more fields for the third step if needed
  ],
  [
    // Add more fields for the preview step
  ],
];

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  driverNumber: '',
  state: '',
  city: '',
  contactNumber: '',
  defaultObjectNo: '',
  _currentStep: 0,
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  driverNumber: Yup.string().required('Driver Number is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string(),
  contactNumber: Yup.string().required('Contact Number is required'),
  defaultObjectNo: Yup.string(),
  _currentStep: Yup.number(),
});

const MultiStepForm: React.FC = () => {
  const handleSubmit = (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    // Handle form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  const renderPreviewStep = (values:any) => {
    return (
      <div style={{ display: values._currentStep === formSections.length - 1 ? 'block' : 'none' }}>
        <h2 className="text-xl font-bold mb-4">Data Preview</h2>
        <ul>
          {formSections
            .slice(0, formSections.length - 1) // Exclude the preview step itself
            .flat()
            .map((field) => (
              <li key={field.name}>
                <strong>{field.label}:</strong> {values[field.name]}
              </li>
            ))}
        </ul>
      </div>
    );
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting, values, isValid, dirty, setFieldValue }) => (
        <Form className="max-w-lg mx-auto mt-8 bg-white p-8 rounded shadow-md">
          <div className="mb-4">
            <div className="flex mb-4">
              {formSections.map((_, index) => (
                <div
                  key={index}
                  className={`w-1/4 ${
                    index === values._currentStep ? 'bg-blue-500' : 'bg-gray-200'
                  } h-2 transition-all duration-300`}
                />
              ))}
            </div>
            {formSections.map((section, index) => (
              <div key={index} style={{ display: index === values._currentStep ? 'block' : 'none' }}>
                {section.map((field) => (
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
              </div>
            ))}
            {renderPreviewStep(values)}
          </div>
          <div className="flex items-center justify-between">
            {values._currentStep === formSections.length - 1 ? (
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={isSubmitting || !isValid || !dirty}
              >
                Submit
              </button>
            ) : (
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={() => {
                  // Move to the next step
                  const nextStep = Math.min(formSections.length - 1, values._currentStep + 1);
                  setFieldValue('_currentStep', nextStep);
                }}
              >
                Next
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default MultiStepForm;
