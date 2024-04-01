const openToggleButton = document.querySelector(".open-dropdown-button")
const closeToggleButton = document.querySelector(".close-dropdown-button")
const dropdownMenu = document.querySelector('.dropdown-menu')
const footer = document.querySelector('.footer')

if (openToggleButton && dropdownMenu && closeToggleButton) {
    openToggleButton.addEventListener("click", () => {
        dropdownMenu.classList.replace("max-lg:-top-full", "max-lg:top-0")
        closeToggleButton.classList.remove("hidden");
        footer.classList.add("hidden")
    })

    closeToggleButton.addEventListener("click", () => {
        dropdownMenu.classList.replace("max-lg:top-0", "max-lg:-top-full");
        closeToggleButton.classList.add("hidden");
        footer.classList.remove("hidden")
    })
}