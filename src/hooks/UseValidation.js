import * as Yup from 'yup'


const UseValidation =() =>{

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    
    const RegisterSchema = Yup.object().shape({
        username:Yup.string()
            .min(5,'Must be 5 character or less ')
            .required('required'),
        password:Yup.string()
            .min(5,'Must be 5 character')
            .required('required'),
        email:Yup.string()
            .email('Invalid  email address')
            .required('required'),
        numbers:Yup.string()
            .min(2,'Must be 5 character')
            .required('required')
            .matches(phoneRegExp,'phone number is not valid'),
        country:Yup.string()
            .min(5,"Must be 5 character")
            .required('required')
        })

    const to ="((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)\w.{6,18}\w)"

    const re = to.tes

    const LoginSchema = Yup.object().shape({
            username: Yup.string()
                .min(5, 'min 5!')
                .required('requeired'),
            password: Yup.string()
                .min(5, 'Min 5!')
                .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,"Password must contain at least 8 characters, one uppercase, one number and one special case character")
                .required('requeired'),
            });
            
    const PersonSchema = Yup.object().shape({
       PersonOne:Yup.string()
       .min(5,'min must 5')
       .required('requerido'),
        PersonTwo:
        Yup.string()
       .min(5,'min must 5')
       .required('requerido'),
        PersonThree:
        Yup.string()
       .min(5,'min must 5')
       .required('requerido'),
        PersonFour:Yup.string()
       .min(5,'min must 5')
       .required('requerido'),
        PersonFive:Yup.string()
       .min(5,'min must 5')
       .required('requerido')
    })


    const handSend = Yup.object().shape({   
            numero_name:Yup.number()
            .min(5,'min must 5')
            .required('requerid'),
            identification:Yup.number()
            .min(5,'min must 5')
            .required('requerid'),
            titular:Yup.string()
            .min(5,'min must 5')
            .required('requerid'),
            saldo:Yup.number()
            .min(1000000,'min must ')
            .max(1000000000)
            .required('requerid'),
        })


    return {RegisterSchema,LoginSchema,PersonSchema,handSend}

}

export default UseValidation