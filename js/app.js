// Homepage
const navbar = document.getElementById('navs');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 130 || document.documentElement.scrollTop >= 130) {
        console.log(4)
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
    } 
    else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
};

// Mobile Nav 
const mobileNav = document.getElementById('mobile-nav-id')
const closeBtn = document.getElementById('close-mobile')
const mobileNavBtn = document.getElementById('mobile-nav-btn')

mobileNavBtn.addEventListener('click', function(){
    mobileNav.style.display = 'block'
})

closeBtn.addEventListener('click', function(){
    mobileNav.style.display = 'none'
})



// Pages 
const loader = document.getElementById('loader');
const register = document.querySelector('.register-page');
const profile = document.querySelector('.profile-page');
const disclaimer = document.querySelector('.disclaimer');
const contacts = document.querySelector('.contacts');
const settings = document.querySelector('.settings-page');
const login = document.querySelector('.login-page');
const email = document.querySelector('.email-page');
const mainContainer = document.querySelector('.main-container');
const mainComponent = document.querySelector('.main-component');
const homePage = document.querySelector('.home-page');
const homePageLoader = document.querySelector('.home-loader');

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
const contactPageBtn =  document.getElementById('cont-p-btn')
const homeBtn =  document.getElementById('home-btn')
const loginHomePage =  document.getElementById('login-home-page')
const registerHomePage =  document.getElementById('register-home-page')
const loginMobile =  document.getElementById('login-mobile')
const registerMobile =  document.getElementById('register-mobile')



register.style.display = 'none';
email.style.display = 'none';
profile.style.display = 'none';
disclaimer.style.display = 'none';
contacts.style.display = 'none';
settings.style.display = 'none';
login.style.display = 'none';

homePage.style.display = 'none';
mainContainer.style.display = 'none';

function loadAll() {
    setTimeout(function(){
        mainContainer.style.display = 'none';
        homePage.style.display = 'block';
    loader.style.display = 'none';
    homePageLoader.style.display = 'none';
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
    contacts.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'none';
    profile.style.display = 'none';
    mainContainer.style.display = 'none';
    loader.style.display = 'block';
    homePageLoader.style.display = 'block';
    
    setTimeout(function() {
        mainComponent.style.display = 'block';
        profile.style.display = 'none';
        homePageLoader.style.display = 'none';
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

// 
// contacts Page
contactPageBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    profile.style.display = 'none';
    disclaimer.style.display = 'none';
    email.style.display = 'none';
    login.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        contacts.style.display = 'block';
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
    mainComponent.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        mainComponent.style.display = 'none';
        profile.style.display = 'block';
        loader.style.display = 'none';
    },2000)
})

// LogIn Page
loginPageBtn.addEventListener('click', () => {
    settings.style.display = 'none';
    profile.style.display = 'none';
    email.style.display = 'none';
    mainComponent.style.display = 'none';
    disclaimer.style.display = 'none';
    register.style.display = 'none';
    loader.style.display = 'block';

    setTimeout(function() {
        mainComponent.style.display = 'none';
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
    mainComponent.style.display = 'none';
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
    mainComponent.style.display = 'none';
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

// Register Btn Home Page
registerHomePage.addEventListener('click', () => {
    // settings.style.display = 'none';
    // email.style.display = 'none';
    // login.style.display = 'none';
    // disclaimer.style.display = 'none';
    mainComponent.style.display = 'none';
    loader.style.display = 'block';
    homePageLoader.style.display = 'block';
    
    setTimeout(function() {
        // homePageLoader.style.display = 'none';
        mainContainer.style.display = 'block';
        register.style.display = 'block';
        loader.style.display = 'none';
        homePageLoader.style.display = 'none';
    },2000)
})

// Login Btn Home Page
loginHomePage.addEventListener('click', () => {
    // settings.style.display = 'none';
    // email.style.display = 'none';
    // login.style.display = 'none';
    // disclaimer.style.display = 'none';
    mainComponent.style.display = 'none';
    loader.style.display = 'block';
    homePageLoader.style.display = 'block';
    
    setTimeout(function() {
        // homePageLoader.style.display = 'none';
        mainContainer.style.display = 'block';
        login.style.display = 'block';
        loader.style.display = 'none';
        homePageLoader.style.display = 'none';
    },2000)
});

// Login Btn Home Page
loginMobile.addEventListener('click', () => {
    // settings.style.display = 'none';
    // email.style.display = 'none';
    // login.style.display = 'none';
    // disclaimer.style.display = 'none';
    mainComponent.style.display = 'none';
    mobileNav.style.display = 'none';
    loader.style.display = 'block';
    homePageLoader.style.display = 'block';
    
    setTimeout(function() {
        // homePageLoader.style.display = 'none';
        mainContainer.style.display = 'block';
        login.style.display = 'block';
        loader.style.display = 'none';
        homePageLoader.style.display = 'none';
    },2000)
})

// Register Btn Home Page
registerMobile.addEventListener('click', () => {
    // settings.style.display = 'none';
    // email.style.display = 'none';
    // login.style.display = 'none';
    // disclaimer.style.display = 'none';
    mainComponent.style.display = 'none';
    mobileNav.style.display = 'none';
    loader.style.display = 'block';
    homePageLoader.style.display = 'block';
    
    setTimeout(function() {
        // homePageLoader.style.display = 'none';
        mainContainer.style.display = 'block';
        register.style.display = 'block';
        loader.style.display = 'none';
        homePageLoader.style.display = 'none';
    },2000)
})