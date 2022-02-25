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

    const LoginSchema = Yup.object().shape({
            username: Yup.string()
                .min(5, 'min 5!')
                .required('requeired'),
            password: Yup.string()
                .min(5, 'Min 5!')
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


    const handQuestion = Yup.object().shape({   
            questionOne:Yup.string()
            .min(5,'min must 5')
            .required('requerid'),
            questionTwo:Yup.string()
            .min(5,'min must 5')
            .required('requerid'),
            questionThree:Yup.string()
            .min(5,'min must 5')
            .required('requerid'),
            questionFour:Yup.string()
            .min(5,'min must 5')
            .required('requerid'),
            questionFive:Yup.string()
            .min(5,'min must 5')
            .required('requerid'),
        })


    return {RegisterSchema,LoginSchema,PersonSchema,handQuestion}

}

export default UseValidation