var API_URL = 'https://private-b2e6827-robustatask.apiary-mock.com';
var API_PATH_SIGNUP = '/auth/register';
var API_PATH_SIGNIN = '/auth/login';

//// On load set up

let loader = document.getElementsByClassName("loader")[0];
loader.style.display = "none";

let signinForm = document.getElementById("signin-form");
let signupForm = document.getElementById("signup-form");
let messageContainer = document.getElementById("messageContainer");
messageContainer.style.display = "none";
let message = document.getElementById("message");

//// Switching between sign in and sign up

document.getElementById("signup-nav").onclick = () => {
    signinForm.style.display = "none";
    signupForm.style.display = "flex";

}

document.getElementById("signin-nav").onclick = () => {
    signupForm.style.display = "none";
    signinForm.style.display = "flex";

}


//// Handling sign up inputs
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


//// Handling sign up submission

function handleSignup(e) {
    e.preventDefault();
    loader.style.display = "block";
    signupForm.style.display = "none";
    const signupData = {
        name: nameInput,
        email,
        username: signupUsername,
        password: signupPassword
    }
    submitForm("signup",signupData);

}
document.getElementById("signup-form").addEventListener('submit', handleSignup)


//// Handling sign in inputs
let username; 
document.getElementById("username").addEventListener('input', (e) =>{ 
    username = e.target.value;
})

let password; 
document.getElementById("password").addEventListener('input', (e) =>{ 
    password = e.target.value;
})

//// Handling sign in submission
function handleSignin(e) {
    e.preventDefault();
    loader.style.display = "block";
    signinForm.style.display = "none";
    const signinData = {
        username,
        password
    }
    submitForm("signin",signinData);
}

document.getElementById("signin-form").addEventListener('submit', handleSignin);

//// Submitting forms and sending data by axios
async function submitForm(formType, data) {
    if (formType === "signup") {
        try {
            let res = await axios.post(`${API_URL}${API_PATH_SIGNUP}`, data);
            console.log(res)
            loader.style.display = "none";
            handleSuccess("signup");
        } catch (error) {
            console.log(error)
            handleError();
        }
        
    } else if (formType === "signin") {
        try {
            let res = await axios.post(`${API_URL}${API_PATH_SIGNIN}`, data);
            console.log(res)
            handleSuccess("signin");
        } catch (error) {
            console.log(error)
            handleError();
        }
    }

}

//// Handling success case
function handleSuccess (formType) {
    if(formType === "signup") {
        message.innerHTML= "Sign Up Successful";
        messageContainer.style.display = "flex";
    } else {
        message.innerHTML= "Sign In Successful";
        messageContainer.style.display = "flex";

    }
}

//// Handling error
function handleError() {
    message.innerHTML= "An error occurred. Please try again later.";
    messageContainer.style.display = "flex";
}
