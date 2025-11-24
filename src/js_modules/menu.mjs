export function toggleMenu() {
    let menubutton = document.querySelector("#menu-button");
    let sidemenu = document.querySelector("#side-menu");

    menubutton.addEventListener("click", () => {
        sidemenu.classList.toggle("active");
    });
}
