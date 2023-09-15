function toggleMenu() {
    const screenWidth = window.innerWidth;
    if (screenWidth < 1200) {
        document.querySelector(".navbar-toggler").click();
    }
}