/* PRELOADER */

document.addEventListener("DOMContentLoaded", function () {
    // Hide loader after 2 seconds
    setTimeout(function () {
        document.querySelector('.loader-wrapper').style.display = 'none';
    }, 1000);
});

/* FIXED HEADER */

document.addEventListener("DOMContentLoaded", function () {
    var headerBottom = document.getElementById("fixedHeader");
    var scrollThreshold = 200;

    window.addEventListener("scroll", function () {
        if (window.scrollY > scrollThreshold) {
            headerBottom.classList.add("opened")
        } else {
            headerBottom.classList.remove("opened")
        }
    });
});