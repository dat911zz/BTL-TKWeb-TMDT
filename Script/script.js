var path = window.location.pathname; //Get current location
var page = path.split("/").pop(); //Get page name
console.log(page);

var menus = document.querySelectorAll(".nav-link");

menus.forEach((menu, index) => {
    console.log(menu, index);
    if (menu.id == page) {
        document.querySelector(".nav-link.active").classList.remove("active");
        menu.classList.add("active");
    }

    console.log(menu.id);
})


  $('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    } else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });

  


