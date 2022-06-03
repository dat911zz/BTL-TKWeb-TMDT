var path = window.location.pathname; //Get current location
var page = path. split("/"). pop(); //Get page name
console.log(page);

var menus = document.querySelectorAll(".nav-link");

menus.forEach( (menu, index) => {
    console.log(menu, index);

    menu.addEventListener("click", () => {
        document.querySelector(".nav-link.active").classList.remove("active");
        console.log(menu, index);
        console.log("SOS");
        menu.classList.add("active");
    })


    console.log(menu.id);
    if(page == menu.id)
    {
        document.querySelector(".nav-link.active").classList.remove("active");
        menu.classList.add("active");
    }
})