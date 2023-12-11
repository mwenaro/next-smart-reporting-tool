"use client"

import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface ObjectFormValues {
  name: string;
  plateNumber: string;
  objectModel: string;
  simCardNumber: string;
  secondarySimNumber: string;
  imeiNumber: string;
  objectCategory: string;
  objectAxel: string;
  manufactureDate: string;
  purchaseDate: string;
  gpsInstallationDate: string;
  gpsWarranty: string;
  chassisNumber: string;
  engineNumber: string;
  odometer: string;
  passengerSeatCount: string;
}

const objectFormFields = [
  { name: 'name', label: 'Name*', type: 'text' },
  { name: 'plateNumber', label: 'Plate Number*', type: 'text' },
  { name: 'objectModel', label: 'Object Model', type: 'text' },
  { name: 'simCardNumber', label: 'Sim Card Number', type: 'text' },
  { name: 'secondarySimNumber', label: 'Secondary Sim Number', type: 'text' },
  { name: 'imeiNumber', label: 'IMEI Number*', type: 'text' },
  { name: 'objectCategory', label: 'Object Category', type: 'text' },
  { name: 'objectAxel', label: 'Object Axel', type: 'text' },
  { name: 'manufactureDate', label: 'Manufacture Date (YYYY-MM-DD)', type: 'text' },
  { name: 'purchaseDate', label: 'Purchase Date (YYYY-MM-DD)', type: 'text' },
  { name: 'gpsInstallationDate', label: 'GPS Installation Date (YYYY-MM-DD)', type: 'text' },
  { name: 'gpsWarranty', label: 'GPS Warranty', type: 'text' },
  { name: 'chassisNumber', label: 'VIN (Chassis Number)', type: 'text' },
  { name: 'engineNumber', label: 'Engine Number', type: 'text' },
  { name: 'odometer', label: 'Odometer', type: 'text' },
  { name: 'passengerSeatCount', label: 'No. of Passenger Seat', type: 'text' },
];

const objectInitialValues: ObjectFormValues = {
  name: '',
  plateNumber: '',
  objectModel: '',
  simCardNumber: '',
  secondarySimNumber: '',
  imeiNumber: '',
  objectCategory: '',
  objectAxel: '',
  manufactureDate: '',
  purchaseDate: '',
  gpsInstallationDate: '',
  gpsWarranty: '',
  chassisNumber: '',
  engineNumber: '',
  odometer: '',
  passengerSeatCount: '',
};

const objectValidationSchema = Yup.object().shape({
  name: Yup.string().max(60, 'Name must be at most 60 characters').required('Name is required'),
  plateNumber: Yup.string().max(40, 'Plate Number must be at most 40 characters').required('Plate Number is required'),
  objectModel: Yup.string(),
  simCardNumber: Yup.string().matches(/^\d{6,20}$/, 'Invalid Sim Card Number'),
  secondarySimNumber: Yup.string().matches(/^\d{6,20}$/, 'Invalid Secondary Sim Number'),
  imeiNumber: Yup.string().max(20, 'IMEI Number must be at most 20 characters').matches(/^\d+$/, 'Only numbers are allowed for IMEI Number').required('IMEI Number is required'),
  objectCategory: Yup.string(),
  objectAxel: Yup.string(),
  manufactureDate: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid Manufacture Date format (YYYY-MM-DD)'),
  purchaseDate: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid Purchase Date format (YYYY-MM-DD)'),
  gpsInstallationDate: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid GPS Installation Date format (YYYY-MM-DD)'),
  gpsWarranty: Yup.string().max(4, 'Invalid GPS Warranty format').matches(/^\d+$/, 'Only numbers are allowed for GPS Warranty'),
  chassisNumber: Yup.string().max(100, 'Chassis Number must be at most 100 characters').matches(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters are allowed for Chassis Number').required('Chassis Number is required'),
  engineNumber: Yup.string().max(100, 'Engine Number must be at most 100 characters').matches(/^[a-zA-Z0-9]+$/, 'Only alphanumeric characters are allowed for Engine Number').required('Engine Number is required'),
  odometer: Yup.string().matches(/^\d{1,100}$/, 'Invalid Odometer format (max 100 numbers)'),
  passengerSeatCount: Yup.string().matches(/^\d{1,8}$/, 'Invalid Passenger Seat Count format (max 8 digits)'),
});

const ObjectForm: React.FC = () => {
  const handleObjectSubmit = (values: ObjectFormValues, { setSubmitting }: any) => {
    // Handle object form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={objectInitialValues}
      validationSchema={objectValidationSchema}
      onSubmit={handleObjectSubmit}
    >
      <Form className="max-w-lg mx-auto mt-8 bg-white p-8 rounded shadow-md">
        {objectFormFields.map(field => (
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

export default ObjectForm;
