import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup' //Yup has some bug due to which we need to import it like this
import { TextField } from 'formik-material-ui'
import Button from '@material-ui/core/Button'
import encodeData from './encodeData'

const FormNameForNetlify = 'FormikContactForm'

const App = ({ isSubmitting }) => (
  <Form
    name={FormNameForNetlify}
    method="POST"
    data-netlify-recaptcha="true"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <div>
      <Field
        type="text"
        name="fname"
        label="First Name *"
        component={TextField}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </div>
    <div>
      <Field
        type="text"
        name="lname"
        label="Last Name *"
        component={TextField}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </div>
    <div>
      <Field
        type="email"
        name="email"
        label="Email Address *"
        component={TextField}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </div>
    <div>
      <Field
        type="text"
        name="purpose"
        label="Purpose of Enquiry *"
        component={TextField}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
      />
    </div>
    <div>
      <Field
        type="text"
        name="message"
        label="Message *"
        component={TextField}
        variant="outlined"
        InputLabelProps={{
          shrink: true,
        }}
        margin="normal"
        multiline
      />
    </div>
    <Button
      type="submit"
      variant="raised"
      color="primary"
      disabled={isSubmitting}
      margin="normal"
    >
      Submit
    </Button>
  </Form>
)

const FormikApp = withFormik({
  mapPropsToValues({ fname, lname, email, purpose, message }) {
    return {
      fname: fname || '',
      lname: lname || '',
      email: email || '',
      purpose: purpose || '',
      message: message || '',
    }
  },
  validationSchema: Yup.object().shape({
    fname: Yup.string()
      .trim()
      .max(50)
      .required('You need to specify your first name'),
    lname: Yup.string()
      .trim()
      .max(50)
      .required('You need to specify your last name'),
    email: Yup.string()
      .email('Email not valid')
      .required('Email is required'),
    purpose: Yup.string()
      .trim()
      .required('You need to specify the purpose of enquiry'),
    message: Yup.string()
      .trim()
      .required('Please your message to Miah Jeffra'),
  }),
  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeData({ 'form-name': `${FormNameForNetlify}`, ...values }),
    }).catch(error => alert(error))

    setTimeout(() => {
      resetForm()
      setSubmitting(false)
    }, 1000)
  },
})(App)

export default FormikApp
