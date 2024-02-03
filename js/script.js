//change height whenever icon clicked
const settingsmenu = document.querySelector(".settings-menu");
//toggle the dark mode button
const darkBtn = document.getElementById("dark-btn");

function settingMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height")
}
//button click will add the dark-btn-on class name from css to change button properties
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    //apply dark theme
    document.body.classList.toggle("dark-theme");
    //update local storage when clicked
    //check if local storage is light or dark, will cchange when button toggled
    if(localStorage.getItem("theme") =="light") {
        localStorage.setItem("theme", "dark");
    }
    else {
        localStorage.setItem("theme", "light");
    }
}

//if local storage is light, then should return browser as light, not dark mode
if (localStorage.getItem("theme") =="light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
}
//if local storage is dark, then return browser as dark
else if (localStorage.getItem("theme") =="dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
}
//default for first time vistors
else {
    localStorage.setItem("theme", "light");
}

//local storage of dark or light mode on browser
// localStorage.setItem("theme", "dark");
// localStorage.getItem("theme");