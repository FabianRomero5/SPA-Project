const validateForm = (form) => {
    const errors = {};
  
   
    const nameRegex = /^[A-Za-z]+$/;
    if (!form.firstname || !nameRegex.test(form.firstname)) {
      errors.firstname = 'Invalid first name';
    }
    if (!form.lastname || !nameRegex.test(form.lastname)) {
      errors.lastname = 'Invalid last name';
    }
  
    
    const documentRegex = /^[A-Za-z0-9]+$/;
    if (!form.document || !documentRegex.test(form.document)) {
      errors.document = 'Invalid document';
    }
  

    if(form.documentType === 'Select'){
      errors.documentType = 'Select Document Type';
    }
    
    const dateOfBirthRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!form.dateOfBirth || !dateOfBirthRegex.test(form.dateOfBirth)) {
      errors.dateOfBirth = 'Invalid date of birth';
    }
  
    
    const placeOfBirthRegex = /^[A-Za-z\s]+$/;
    if (!form.placeOfBirth || !placeOfBirthRegex.test(form.placeOfBirth)) {
      errors.placeOfBirth = 'Invalid place of birth';
    }
  
 
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email || !emailRegex.test(form.email)) {
      errors.email = 'Invalid email address';
    }
  
   
    const phoneRegex = /^[0-9]+$/;
    if (!form.phone || !phoneRegex.test(form.phone)) {
      errors.phone = 'Invalid phone number';
    }
  
   
    const usernameRegex = /^[A-Za-z0-9]+$/;
    if (!form.userName || !usernameRegex.test(form.userName)) {
      errors.userName = 'Invalid username';
    }
  
  
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!form.password || !passwordRegex.test(form.password)) {
      errors.password = 'Password must be at least 8 characters and include at least one uppercase letter, one lowercase letter, and one number.';
    }
  
    
    if (!form.confirmPassword || form.password !== form.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
  
    return errors;
  };
  
  export default validateForm;
  