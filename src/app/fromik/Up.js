import * as Yup from 'yup';

export  const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required name'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required email'),
        password:Yup.number().min(5,'to thi sshow t').max(11,'thi si is log').required("requed")
});