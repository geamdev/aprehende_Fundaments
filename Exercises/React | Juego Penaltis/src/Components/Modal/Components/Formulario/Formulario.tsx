

import * as Yup from 'yup';

import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
  position: string;
}

const initialValues: FormValues = {
  position: '',
};

const validationSchema = Yup.object().shape({
  position: Yup.string()
    .matches(/^[1-6]$/, 'La posición debe ser un número del 1 al 6')
    .required('La posición es requerida'),
});

const Formulario = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ touched, errors }) => (
        <div className='box'>
          <Form>
            <div className='position-box'>
              <label htmlFor="position">Posicion</label>
              <Field
                name="position"
                type="number"
                min={1}
                max={6}
                />
              <ErrorMessage 
                name="position" 
                component="div"
                className="error"
              />
            </div>
            <div>
              <button type="submit" disabled={Object.keys(errors).length > 0}>
                Patear
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Formulario;
