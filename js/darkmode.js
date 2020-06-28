const toggle = document.getElementById("darkmodeToggle");

function showToggle(){
    toggle.style.display='block';
}

showToggle();


let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#darkmodeToggle");


const enableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.add("darkmode")

    // 2. update darkmode in the localstorage
    localStorage.setItem('darkMode', 'enabled')
}

const disableDarkMode = () => {
    // 1. add the class darkmode to the body
    document.body.classList.remove("darkmode")

    // 2. update darkmode in the localstorage
    localStorage.setItem('darkMode', null)
}

if(darkMode === 'enabled'){
    enableDarkMode();
    document.getElementById("home").src = "img/homeDark.png";
    document.getElementById("profile").src = "img/profileDark.png"
    document.getElementById("lightmode").src = "img/darkmode.png"
}


darkModeToggle.addEventListener('click', () =>{
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled'){
        enableDarkMode();
        console.log(darkMode)
        document.getElementById("home").src = "img/homeDark.png";
        document.getElementById("profile").src = "img/profileDark.png"
        document.getElementById("lightmode").src = "img/darkmode.png"
    } else {
        disableDarkMode();
        console.log(darkMode)
        document.getElementById("home").src = "img/home.png"
        document.getElementById("profile").src = "img/profile.png"
        document.getElementById("lightmode").src = "img/lightmode.png"
    }
    
});

// https://stackoverflow.com/questions/6764961/change-an-image-with-onclick
// https://www.youtube.com/watch?v=wodWDIdV9BY