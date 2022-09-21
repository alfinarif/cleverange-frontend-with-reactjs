
class ValidationHelper{

    isEmptyField = (value)=>{
        if(value.length === 0){
            return true
        }else{
            return false
        }
    }


    isValidEmail = (value)=>{
        let email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if(email_regex.test(value)){
            return true
        }else{
            return false
        }
    }

    isMobileNumber = (value)=>{
        let mobile_number_regex =   /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/
        if(mobile_number_regex.test(value)){
            return true
        }else{
            return false
        }
    }

}

export const {isEmptyField, isValidEmail, isMobileNumber} = new ValidationHelper();