document.addEventListener("DOMContentLoaded", function () {
    const navbarMenu = document.querySelector(".menu-toggle");
    const navbarItemRight = document.querySelector(".navbar-item-rigth");
    const banner = document.querySelector(".banner");
    const minBannerHeight = 80;
    let maxBannerHeight;

    let flag = false;

    if (window.innerWidth > 820) {
        maxBannerHeight = 600;
    } else {
        maxBannerHeight = 287;
    }

    navbarMenu.addEventListener("click", function () {
        flag = !flag;
        navbarItemRight.classList.toggle("show");
        navbarItemRight.classList.toggle("hidden");
        navbarMenu.classList.toggle("rotate");
        let scrollY = window.scrollY;
        let newHeight = Math.max(minBannerHeight, maxBannerHeight - scrollY);
        console.log(flag);

        if (flag == true) {
            myClose.classList.add('show');
            myMenu.classList.add('hidden')
            banner.style.height = 207 + 80 + "px";
        } else {
            myClose.classList.remove('show');
            myMenu.classList.remove('hidden');
            if (window.scrollY == 0) {
                banner.style.height = 207 + 80 + "px";
            } else {
                banner.style.height = 80 + "px";
            }
        }
    });

    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
        let newHeight = Math.max(minBannerHeight, maxBannerHeight - scrollY);
        if(flag == false) {
            banner.style.height = newHeight + "px";
        }
    });
});
