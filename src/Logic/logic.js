export function emailExist(email){
    if(email){
        return true
    }else return false
}
export function emailAt(email){
    if(email.includes('@')){
        return true
    }else return false
}
export function emailPeriod(email){
    if(email.includes('.')){
        return true
    }else return false
}
export function emailSpace(email){
    if(email.includes(' ')){
        return false
    }else return true
}
export function loginPassword(password){
    if(password){
        return true
    }else return false
}

export function userFirstNameValidator(firstName) {
    if (firstName) {
        return true;
    }
}

export function userLastNameValidator(lastName) {
    if (lastName) {
        return true;
    }
}

export function userEmailValidator(email) {
    if (email) {
        return true;
    }
}

export function userEmailAtValidator(email) {
    if (email.includes('@')) {
        return true;
    } else return false
}

export function userEmailDotValidator(email) {
    if (email.includes('.')) {
        return true;
    } else return false
}

export function userEmailSpaceValidator(email) {
    if (email.includes(' ')) {
        return false;
    } else return true
}