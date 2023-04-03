import { useFormik } from 'formik'

function Form() {
  const formik = useFormik({
    initialValues: {
      name: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <form onSubmit={formik.handleSubmit}>
       <label htmlFor="name">Ingresa la posicion donde deseas patear:</label>
       <input
         id="name"
         name="name"
         type="name"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
 
       <button type="submit">Submit</button>
     </form>
  )
}

export default Form