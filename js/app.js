// Pages 
const loader = document.getElementById('loader');
const register = document.querySelector('.register-page');
const profile = document.querySelector('.profile-page');
const disclaimer = document.querySelector('.disclaimer');
const settings = document.querySelector('.settings-page');
const login = document.querySelector('.login-page');
const email = document.querySelector('.email-page');

// Links 
const registerBtn =  document.getElementById('register-btn')
const loginPageBtn =  document.getElementById('login-p-btn')
const settingsPageBtn =  document.getElementById('settings-p-btn')
const logoutPageBtn =  document.getElementById('logout-p-btn')
const loginBtn =  document.getElementById('login-btn')
const registerPageBtn =  document.getElementById('register-p-btn')
const emailPageBtn =  document.getElementById('email-p-btn')
const emailPageBtn2 =  document.getElementById('email-p-btn2')
const disclaimerPageBtn =  document.getElementById('disc-p-btn')
const homeBtn =  document.getElementById('home-btn')



register.style.display = 'none';
email.style.display = 'none';
profile.style.display = 'none';
disclaimer.style.display = 'none';
settings.style.display = 'none';
login.style.display = 'none';

function loadAll() {
    setTimeout(function(){
    profile.style.display = 'block';
    loader.style.display = 'none';
    }, 2000)
}

loadAll()

// Settings Page
settingsPageBtn.addEventListener('click', () => {
    profile.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        settings.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// Home Page
homeBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    disclaimer.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        profile.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// Disclaimer Page
disclaimerPageBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    profile.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        disclaimer.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// Logout Page
logoutPageBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    profile.style.display = 'none';
    email.style.display = 'none';
    disclaimer.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        login.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// LogIn Btn Page
loginBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    profile.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    disclaimer.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        profile.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// LogIn Page
loginPageBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    profile.style.display = 'none';
    email.style.display = 'none';
    disclaimer.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        login.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// Email1 Page
emailPageBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    disclaimer.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        profile.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// Email2 Page
emailPageBtn2.addEventListener('click', () => {
    settings.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    disclaimer.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        profile.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})


// Register Page
registerPageBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    disclaimer.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        register.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// Register Btn Page
registerBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    register.style.display = 'none';
    login.style.display = 'none';
    disclaimer.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        email.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})