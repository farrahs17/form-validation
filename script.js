var API_URL = 'https://private-b2e6827-robustatask.apiary-mock.com';
var API_PATH_SIGNUP = '/auth/register';
var API_PATH_SIGNIN = '/auth/login';

let loading = false;
document.getElementById("signup-nav").onclick = () => {
    document.getElementById("signin-form").style.display = "none";
    document.getElementById("signup-form").style.display = "block";

}

document.getElementById("signin-nav").onclick = () => {
    document.getElementById("signup-form").style.display = "none";
    document.getElementById("signin-form").style.display = "block";

}

let nameInput;
document.getElementById("name").addEventListener('input', (e) => {
    nameInput = e.target.value;
})

let email; 
document.getElementById("email").addEventListener('input', (e) =>{ 
    email = e.target.value;
})

let signupUsername; 
document.getElementById("signup-username").addEventListener('input', (e) =>{ 
    signupUsername = e.target.value;
})

let signupPassword; 
document.getElementById("signup-password").addEventListener('input', (e) =>{ 
    signupPassword = e.target.value;
})

function handleSignup(e) {
    e.preventDefault();
    loading = true;
    const signupData = {
        name: nameInput,
        email,
        username: signupUsername,
        password: signupPassword
    }
    submitForm("signup",signupData);

}
document.getElementById("signup-form").addEventListener('submit', handleSignup)

function validate(formType, data) {
    if (formType === "signup") {
        if (data.name !== null || data.name !== "" || data.name !== " ") {
            console.log('validated')
        } else {
            console.log("not validated")
        }

    }
}


let uername; 
document.getElementById("username").addEventListener('input', (e) =>{ 
    username = e.target.value;
})

let password; 
document.getElementById("password").addEventListener('input', (e) =>{ 
    password = e.target.value;
})

function handleSignin(params) {
     e.preventDefault();
    loading = true;
    const signinData = {
        username,
        password
    }
    submitForm("signin",signinData);
}

document.getElementById("signin-form").addEventListener('submit', handleSignin);

async function  submitForm(formType, data) {
    if (formType === "signup") {
        try {
            let res = await axios.post(`${API_URL}${API_PATH_SIGNUP}`, data);
            console.log(res)
            loading = false;
        } catch (error) {
            console.log(error)
        }
        
    } else if (formType === "signin") {
        try {
            let res = await axios.post(`${API_URL}${API_PATH_SIGNIN}`, data);
            console.log(res)
            loading = false;
        } catch (error) {
            console.log(error)
        }
    }

}
