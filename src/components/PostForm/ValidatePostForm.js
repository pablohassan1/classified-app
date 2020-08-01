export const validate = (values) => {
    let errors = {};

    const validateEmail = (email) => {
        // eslint-disable-next-line
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);          
    }


    const containsSpecialCharacters = (str) => {
        // eslint-disable-next-line
        var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
            return regex.test(str);
        
    }

    // name
    if(!values.name){
        errors.name = "Name is required";        
    }else if (containsSpecialCharacters(values.name)){
        errors.name = "Name cannot contain special characters";
    }

    // email
    if(!values.email){
        errors.email = "Email is required";
    }else if(!validateEmail(values.email)){
        errors.email = "Email is invalid";
    }

    // title
    if(!values.title){
        errors.title = "Title is required";        
    }else if (containsSpecialCharacters(values.title)){
        errors.title = "Title cannot contain special characters";
    }

    // content
    if(!values.content){
        errors.content = "You need to provide something here";
    }else if(values.content.length < 500){
        errors.content = "Your story needs to have at least 500 characters";
    }else if(values.content.length > 3000){
        errors.content = "Your story is too long, keep it under 3000 characters please";
    }

    return errors;
}