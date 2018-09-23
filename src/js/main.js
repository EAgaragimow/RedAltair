// Open login menu
const userIcon = $('.actions__profile .fa-user');
const submenu = $('.actions__profile .login-submenu');

userIcon.on('click', function() {
    submenu.fadeToggle();
});

// Login menu
const loginButton = $('.choose-form__login');
const registrationButton = $('.choose-form__registration');
const loginForm = $('#loginForm');
const registrationForm = $('#registrationForm');

loginButton.on('click', selectMenu);
registrationButton.on('click', selectMenu);

// Search
$('.slider .search .fa-search').on('click', function() {
    alert("Sorry, but searching not working yet.");
});

// Main menu toggle
const menuButton = $('nav .wrapper .main-menu-toggle .fa');
const mainMenu = $('nav .wrapper .menu-items');

menuButton.on('click', () => {
    mainMenu.slideToggle();
    $('body').toggleClass('disabled');
});

// Functions
function selectMenu() {
    if (this.id === 'active') {
        return;
    }
    loginButton.attr('id', '');
    registrationButton.attr('id', '');

    myFadeToggle(loginForm);
    myFadeToggle(registrationForm);
    this.id = 'active';
}

function myFadeToggle(selector) {
    selector.fadeToggle(0);
}