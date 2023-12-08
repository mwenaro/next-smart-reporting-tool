"use client"
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface GeofenceFormValues {
  type: string;
  name: string;
  category: string;
  geofenceCoordinates: string;
  description: string;
  tolerance: string;
  radius: string;
  geofenceType: string;
  contactNo: string;
  address: string;
}

const geofenceFormFields = [
  { name: 'type', label: 'Type', type: 'text' },
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'category', label: 'Category', type: 'text' },
  { name: 'geofenceCoordinates', label: 'Geofence Coordinates', type: 'text' },
  { name: 'description', label: 'Description', type: 'text' },
  { name: 'tolerance', label: 'Tolerance (meter)', type: 'text' },
  { name: 'radius', label: 'Radius (meter)', type: 'text' },
  { name: 'geofenceType', label: 'Geofence Type', type: 'text' },
  { name: 'contactNo', label: 'Contact No', type: 'text' },
  { name: 'address', label: 'Address', type: 'text' },
];

const geofenceInitialValues: GeofenceFormValues = {
  type: '',
  name: '',
  category: '',
  geofenceCoordinates: '',
  description: '',
  tolerance: '',
  radius: '',
  geofenceType: '',
  contactNo: '',
  address: '',
};

const geofenceValidationSchema = Yup.object().shape({
  type: Yup.string().required('Type is required'),
  name: Yup.string().required('Name is required'),
  category: Yup.string(),
  geofenceCoordinates: Yup.string().required('Geofence Coordinates are required'),
  description: Yup.string(),
  tolerance: Yup.string(),
  radius: Yup.string().required('Radius is required'),
  geofenceType: Yup.string(),
  contactNo: Yup.string(),
  address: Yup.string(),
});

const GeofenceForm: React.FC = () => {
  const handleGeofenceSubmit = (values: GeofenceFormValues, { setSubmitting }: any) => {
    // Handle geofence form submission logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={geofenceInitialValues}
      validationSchema={geofenceValidationSchema}
      onSubmit={handleGeofenceSubmit}
    >
      <Form className="max-w-2xl mx-auto mt-8 bg-white p-8 rounded shadow-md">
        {geofenceFormFields.map(field => (
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

export default GeofenceForm;
