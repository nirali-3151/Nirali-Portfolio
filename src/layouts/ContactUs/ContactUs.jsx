import React from 'react'
import "./ContactUs.css"
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextFeildComp from '@componants/FormComp/TextFeild';
import PhoneInputFinal from '@componants/FormComp/PhoneComp';
import { IconButton, InputAdornment } from '@mui/material';
import DropDownComp from '@componants/FormComp/Dropdown';
import Button from '@componants/ButtonComp/ButtonComp';
import { CONTACT_US_CONST } from '@constants/index';

const validationSchema = Yup.object({
    message: Yup.string().required("Feild is required"),
    option: Yup.object().required("Feild is required"),
    firstName: Yup.string().required("Feild is required"),
    lastName: Yup.string().required("Feild is required"),
    email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    phone: Yup.string()
        .required("Phone number is required"),
});

const ContactUs = () => {
    const initialValues = {
        option: "",
        message: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
    };

    const onSubmit = async (val) => {
        console.log("val ----", val);
    };

    return (
        <div className='contact-us-main-wrapper'>
            <div className='container'>
                <div className='contact-us-main-wrapper-inner'>
                    <div className='contact-us-main-wrapper-left'>
                        <div className='contact-us-main-wrapper-left-inner'>
                            <div className='section-title'>Let’s work together!
                            </div>
                            <div className='text1'>
                                I design and code beautifully simple things and i love what i do. Just simple like that!
                            </div>
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                {({ setFieldValue, errors }) => (
                                    <Form>
                                        <div className="form-main-wrapper mb-3 my-4">
                                            <div className="form-main-wrapper-left">
                                                <Field
                                                    name="firstName"
                                                    render={({ field, form }) => (
                                                        <TextFeildComp
                                                            {...field}
                                                            label="First Name"
                                                            variant="outlined"
                                                            fullWidth
                                                            meta={
                                                                form.touched.firstName && form.errors.firstName
                                                                    ? {
                                                                        touched: true,
                                                                        error: form.errors.firstName,
                                                                    }
                                                                    : { touched: false, error: "" }
                                                            }
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <div className="form-main-wrapper-right">
                                                <Field
                                                    name="lastName"
                                                    render={({ field, form }) => (
                                                        <TextFeildComp
                                                            {...field}
                                                            label="Last Name"
                                                            variant="outlined"
                                                            fullWidth
                                                            meta={
                                                                form.touched.lastName && form.errors.lastName
                                                                    ? { touched: true, error: form.errors.lastName }
                                                                    : { touched: false, error: "" }
                                                            }
                                                        />
                                                    )}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-main-wrapper mb-3">
                                            <div className="form-main-wrapper-left">
                                                <Field
                                                    name="email"
                                                    render={({ field, form }) => (
                                                        <TextFeildComp
                                                            {...field}
                                                            label="Email Address"
                                                            variant="outlined"
                                                            fullWidth
                                                            meta={
                                                                form.touched.email && form.errors.email
                                                                    ? { touched: true, error: form.errors.email }
                                                                    : { touched: false, error: "" }
                                                            }
                                                        />
                                                    )}
                                                />
                                            </div>
                                            <div className="form-main-wrapper-right">
                                                <PhoneInputFinal
                                                    name="phone"
                                                    setFieldValue={setFieldValue}
                                                    error={errors["phone"]}
                                                />
                                            </div>
                                        </div>
                                        <div className='mb-3'>
                                            <Field
                                                name="option"
                                                render={({ field, form }) => (
                                                    <DropDownComp
                                                        {...field}
                                                        label="Select service"
                                                        variant="outlined"
                                                        fullWidth
                                                        meta={
                                                            form.touched.option && form.errors.option
                                                                ? {
                                                                    touched: true,
                                                                    error: form.errors.option,
                                                                }
                                                                : { touched: false, error: "" }
                                                        }
                                                    // options={servicesOption}
                                                    />
                                                )}
                                            />
                                        </div>
                                        <div className='mb-3'>
                                            <Field
                                                name="message"
                                                render={({ field, form }) => (
                                                    <TextFeildComp
                                                        multiline
                                                        rows={4}
                                                        {...field}
                                                        label="Message"
                                                        variant="outlined"
                                                        fullWidth
                                                        meta={
                                                            form.touched.message && form.errors.message
                                                                ? { touched: true, error: form.errors.message }
                                                                : { touched: false, error: "" }
                                                        }
                                                    />
                                                )}
                                            />
                                        </div>
                                        <Button
                                            text="Send Message"
                                        />
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className='contact-us-main-wrapper-right'>
                        {
                            CONTACT_US_CONST?.map((item, index) => {
                                return (
                                    <div className='contact-us-details-main-wrapper' key={index}>
                                        <div className='contact-us-details-main-wrapper-left'><item.icon size={24} /> </div>
                                        <div className='contact-us-details-main-wrapper-right'>
                                            <div className='text1'>{item.text}</div>
                                            <div className='text2'>{item.details}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactUs
