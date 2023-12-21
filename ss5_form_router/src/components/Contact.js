import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ContactSchema = Yup.object().shape({
    name: Yup.string()
        .required("Name is required")
        .matches("[a-zA-Z]{1,}","Name just contains a letter"),
    phone: Yup.string()
        .required("Phone is required")
        .matches("0\\d{9}","Phone must be start with 0 and max 10 numbers"),
    email: Yup.string()
        .required("Email is required")
        .email("Please enter a valid email address")
        .matches("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$")
});

export const Contact = () => (
  <div>
    <h1>Contact</h1>
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: ""
      }}
      validationSchema={ContactSchema}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>
            <label htmlFor="name">Name: </label>
            <Field id="name" name="name" />
            {errors.name && touched.name ? (
                <div>{errors.name}</div>
            ) : null}
            <label htmlFor="phone">Phone: </label>
            <Field id="phone" name="phone" />
            {errors.phone && touched.phone ? (
                <div>{errors.phone}</div>
            ) : null}
            <label htmlFor="email">Email: </label>
            <Field id="email" name="email" type="email" />
            {errors.email && touched.email ? (
                <div>{errors.email}</div> 
            ) : null}
            <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  </div>
);