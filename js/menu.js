(function(){
    const openButton = document.querySelector(".nav__menu");
    const menu = document.querySelector(".nav__link");
    const closeMenu = document.querySelector(".nav__close");
    const menuOptions = document.querySelectorAll(".nav__link");

    openButton.addEventListener("click", () =>{
        menu.classList.add("nav__link--show");
    });

    closeMenu.addEventListener("click", () =>{
        menu.classList.remove("nav__link--show");
    });


    menuOptions.forEach(option => {
        option.addEventListener("click", () => {
            menu.classList.remove("nav__link--show");
        })
    })

})();