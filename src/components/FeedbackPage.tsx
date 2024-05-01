import { FC, useState } from 'react';
import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import * as Yup from 'yup';
import Button from '../ui-elements/Buttons';
import SuccessMessage from '../ui-elements/SuccessMessage';

// Define the validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required('Username is required.'),
  email: Yup.string().email('Please enter a valid email address.').required('Email is required.'),
  subject: Yup.string().required('Subject is required.'),
  message: Yup.string().required('Message is required.')
});

/* also we can add type folder and file and our type write there */

interface FormData {
  username: string;
  email: string;
  subject: string;
  message: string;
}

const initialValues: FormData = {
  username: '',
  email: '',
  subject: '',
  message: ''
};

const FeedbackPage: FC = () => {
    const [showSuccess, setShowSuccess] = useState<boolean>(false);  // State to control success message visibility
    return (
        <div className='w-full max-w-[480px] m-auto p-5'>
            <div className='border rounded-md border-[#ccc] p-5'>
                <h1 className='text-dark-green mb-5 text-xl md:text-2xl font-bold text-center'>Feedback Form</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setTimeout(() => {
                            setShowSuccess(true);  // Show success message
                            setTimeout(() => setShowSuccess(false), 3000);  // Hide success message after 3 seconds
                            setSubmitting(false);
                            resetForm();
                        }, 400);
                    }}
                >
                {() => (
                    <Form>
                        <div className='mb-4'>
                            <label htmlFor="username">Username</label>
                            <Field id="username" name="username" type="text" className="border rounded-md w-full p-2 border-[#ccc] focus:outline-none focus:border-gray-500" />
                            <FormikErrorMessage name="username" component="div" className="text-red-600 text-xs md:text-base" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" type="email" className="border rounded-md w-full p-2 border-[#ccc] focus:outline-none focus:border-gray-500" />
                            <FormikErrorMessage name="email" component="div" className="text-red-600 text-xs md:text-base" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="subject">Subject</label>
                            <Field id="subject" name="subject" type="text" className="border rounded-md w-full p-2 border-[#ccc] focus:outline-none focus:border-gray-500" />
                            <FormikErrorMessage name="subject" component="div" className="text-red-600 text-xs md:text-base" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message">Message</label>
                            <Field as="textarea" id="message" name="message" className="border rounded-md w-full p-2 border-[#ccc] focus:outline-none focus:border-gray-500" />
                            <FormikErrorMessage name="message" component="div" className="text-red-600 text-xs md:text-base" />
                        </div>

                        <Button type="submit" variant="primary">Submit</Button>
                    </Form>
                )}
                </Formik>
            </div>
            <SuccessMessage show={showSuccess}>
                Your message has been sent!
            </SuccessMessage>
        </div>
    );
};

export default FeedbackPage;
