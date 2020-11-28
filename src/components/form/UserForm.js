import React from 'react';
import { Formik, Field, Form } from 'formik';

import 'bootstrap/dist/css/bootstrap.min.css';
import './form.css';

const UserForm = (props) => {

    return (
        <div className="form-wraper">
            <div className="form__group field">
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                    }}
                    onSubmit={async (values) => {
                        await new Promise((r) => setTimeout(r, 500));
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    <Form>
                        {/* <label htmlFor="firstName">First Name</label> */}
                        <Field
                            className="form__field"
                            id="firstName"
                            name="firstName"
                            placeholder="Jane" />

                        {/* <label htmlFor="lastName">Last Name</label> */}
                        <Field
                            className="form__field"
                            id="lastName"
                            name="lastName"
                            placeholder="Doe" />

                        {/* <label htmlFor="email">Email</label> */}
                        <Field
                            className="form__field"
                            id="email"
                            name="email"
                            placeholder="jane@acme.com"
                            type="email"
                        />
                        <button type="submit">Submit</button>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default UserForm;