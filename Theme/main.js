const btn = document.querySelector(".btn-toggle");
const currentTheme = localStorage.getItem("theme")

$(document).ready(function () {
    // var currentTheme = "dark";
    if (currentTheme === "dark") {
        $("body").addClass("dark-theme");
    }
});


$(btn).click(function () {
    $("body").toggleClass("dark-theme");
    let theme = "light"

    if ($("body").hasClass("dark-theme")) {
        theme = "dark";
    }

    localStorage.setItem("theme", theme)

});

//Axel