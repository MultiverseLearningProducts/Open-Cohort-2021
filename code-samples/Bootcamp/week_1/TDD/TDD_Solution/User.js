class User {
    constructor(username, password, email, age) {
        this.username = username
        this.password = password
        this.email = email
        this.age = age
        this.favoriteTech = []
    }

    checkAge() {
        let age = this.age;

        if (age >= 18 && age < 75) {
            return true;
        } else {
            return false;
        }
        //ternary operator
        // (age >= 18 && age < 75) ? true : false
    }

    addTech(technology) {
        this.favoriteTech.push(technology)
    }

    validateEmail() {
        // kevinIsTheMan@gmail.com //array //splice & slice //join
        // ['kevinIsTheMan' , 'gmail.com']
        let domain = this.email.split('@')[1] 
        if(domain === 'gmail.com') {
            return true
        } else {
            return false
        }
    }

}

//Test that our datatypes are correct 

//Tests to make sure that our methods are returning the correct values


module.exports = User