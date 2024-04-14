import * as Yup from "yup";

export const signUpSchema = Yup.object({
    FirstName: Yup.string()
        .matches(/^[A-Za-z ]+$/, 'First name must contain only alphabetic characters')
        .min(2)
        .max(25)
        .required("First name is required"),
    LastName: Yup.string()
        .matches(/^[A-Za-z ]+$/, 'Last name must contain only alphabetic characters')
        .min(2)
        .max(25)
        .required("Last name is required"),
    postion: Yup.string().min(2).max(25).required("Name is required"),
    Email: Yup.string().email().required("email is required "),
    number: Yup.number().typeError('Mobile number must be a number')
        .test('len', 'Mobile number must be exactly 10 digits', val => (val + '').length === 10)
        .required("Mobile number is required"),
});