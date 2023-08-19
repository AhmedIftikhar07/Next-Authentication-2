export default function login_validate(values){
    const errors = {};
    
    // validation for email

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      // validation for password

    if(!values.password){
        errors.password = "Required"
    }else if(values.password.lenght<8 || values.password.lenght>20){
        errors.password = "Must be greater than 8 & less than 20 characters"
    }else if(values.password.includes("")){
        errors.password = "Invalid Password"
    }
    return errors
}

export function registorValidate(values){
    const errors = {};

    if(!values.username){
        errors.username = "Reduired"
    }

    if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }

      if(!values.password){
        errors.password = "Required"
    }else if(values.password.lenght<8 || values.password.lenght>20){
        errors.password = "Must be greater than 8 & less than 20 characters"
    }
    
    if(!values.cpassword){
        errors.cpassword = "Required"
    }else if(values.cpassword !== values.password){
        errors.cpassword = "Confirm password must be same"
    }
    return errors;
}