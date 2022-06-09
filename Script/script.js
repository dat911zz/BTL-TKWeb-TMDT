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

  // Đếm ngược thời gian refresh hàng hot
  var fullTime = new Date("july 19, 2022 16:40:00").getTime();
        setInterval(() => {
            var now = new Date().getTime();
            // now = new Date("may 31, 2022 16:40:00").getTime();
            var duration = fullTime - now;

            var days = Math.floor(duration/(1000*60*60*24));
            var hours = Math.floor(duration/(1000*60*60));
            var mins = Math.floor(duration/(1000*60));
            var secs = Math.floor(duration/(1000));

            hours %= 24;
            mins %= 60;
            secs %= 60;

            document.getElementById("dd").innerHTML = days;
            document.getElementById("hh").innerHTML = hours;
            document.getElementById("mm").innerHTML = mins;
            document.getElementById("ss").innerHTML = secs;

            if (duration <= 0){

                document.getElementById("dd").innerHTML = 0;
                document.getElementById("hh").innerHTML = 0;
                document.getElementById("mm").innerHTML = 0;
                document.getElementById("ss").innerHTML = 0;
                var end = document.querySelector(".end");
                end.style.display = "block";
                end.style.color = "red";
                end.style.textAlign = "center";
            }
        }, 1000)


