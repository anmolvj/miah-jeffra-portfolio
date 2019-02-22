import React from 'react'
import { withFormik, Form, Field } from 'formik'
import * as Yup from 'yup' //Yup has some bug due to which we need to import it like this
import { TextField } from 'formik-material-ui'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
`

const FieldContainer = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
`

const FirstAndLastNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const StyledNameField = styled(TextField)``

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

const App = ({ isSubmitting }) => (
  <Container>
    <Form
      name="contactForm"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <FirstAndLastNameContainer>
        <FieldContainer>
          <Field
            type="text"
            name="fname"
            label="First Name *"
            component={StyledNameField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
        </FieldContainer>
        <FieldContainer>
          <Field
            type="text"
            name="lname"
            label="Last Name *"
            component={StyledNameField}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            margin="normal"
          />
        </FieldContainer>
      </FirstAndLastNameContainer>

      <FieldContainer>
        <Field
          type="email"
          name="email"
          label="Email Address *"
          component={TextField}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
      </FieldContainer>
      <FieldContainer>
        <Field
          type="text"
          name="purpose"
          label="Purpose of Enquiry *"
          component={TextField}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
        />
      </FieldContainer>
      <FieldContainer>
        <Field
          type="text"
          name="message"
          label="Message *"
          component={TextField}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          margin="normal"
          multiline
        />
      </FieldContainer>
      <FieldContainer>
        <Button
          type="submit"
          variant="outlined"
          disabled={isSubmitting}
          margin="normal"
        >
          Submit
        </Button>
      </FieldContainer>
    </Form>
  </Container>
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
      body: encode({ 'form-name': 'contactForm', ...values }),
    }).catch(error => alert(error))

    setTimeout(() => {
      resetForm()
      setSubmitting(false)
    }, 1000)
  },
})(App)

export default FormikApp
