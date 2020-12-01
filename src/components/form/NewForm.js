import React from 'react';
import { Formik, Field, Form } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';

const NewForm = () => {
    return (
        <>

            <div className="form-wrapper row justify-content-center">
                <div className="col-xl-6 col-lg-8 col-10">
                    <Formik
                        initialValues={{
                            firstName: '',
                            lastName: '',
                            email: '',
                            address: '',
                            phone: ''
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <Form>
                            <label htmlFor="firstName">First Name</label>
                            <Field
                                id="firstName"
                                className="rounded-pill"
                                name="firstName"
                                placeholder="Jane" />
                            <label htmlFor="lastName">Last Name</label>
                            <Field
                                id="lastName"
                                className="rounded-pill"
                                name="lastName"
                                placeholder="Doe" />
                            <label htmlFor="email">Email</label>
                            <Field
                                id="email"
                                className="rounded-pill"
                                name="email"
                                placeholder="@"
                                type="email"
                            />
                            <label htmlFor="email">Email</label>
                            <Field
                                id="address"
                                className="rounded-pill"
                                name="address"
                                placeholder="miastul.  "
                                type="address"
                            />
                            <Field
                                id="phone"
                                className="rounded-pill"
                                name="phone"
                                placeholder=" twój telefon"
                                type="phone"
                            />
                            <button type="submit">Submit</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
};

export default NewForm;