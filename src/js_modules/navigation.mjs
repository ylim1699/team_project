export function toggleMenu() {
    let menuButton = document.querySelector("#menu-button");
    let sideMenu = document.querySelector("#side-menu");

    menuButton.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
        
        if (sideMenu.classList.contains("active")) {
                menuButton.setAttribute("aria-expanded", true);
            } else {
                menuButton.setAttribute("aria-expanded", false);
            }
    });
}
