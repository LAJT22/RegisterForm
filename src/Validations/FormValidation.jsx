import * as yup from 'yup'

const FormSchema = yup.object().shape({
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character'
        )
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref('password')], 'Passwords must match')
        .required('Password confirmation is required'),
    nip: yup.string().required('NIP is required'),
    phone: yup.string().optional(),
    role: yup
        .string()
        .oneOf(
            [
                'Admin',
                'Director',
                'Inspector',
                'Manager',
                'Accountant',
                'Board Representative',
            ],
            'Invalid user role'
        )
        .required('User role is required'),
})

export default FormSchema
