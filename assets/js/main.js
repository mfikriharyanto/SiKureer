// Simplifikasi submit form
function checkResi(event) {
    event.preventDefault();

    const resi = document.getElementById('resi');

    if (resi.value == "") {
        alert(`Nomor resi tidak boleh kosong.`);
    } else {
        alert(`Nomor resi ${resi.value} tidak ditemukan.\nMohon masukkan nomor resi yang valid.`);
    }
    
    resi.value = "";
}

// Toggle mobile menu
function mobileMenu() {
    const menu = document.getElementById("nav-list-mobile");
    if (menu.style.display === "flex") {
        menu.style.display = "";
    } else {
        menu.style.display = "flex";
    }
}

const buttonCheckResi = document.getElementById("button-check-resi");
buttonCheckResi.addEventListener("click", checkResi);

const hamburgerMenu = document.getElementById("hamburger-menu");
hamburgerMenu.addEventListener("click", mobileMenu);

const containerMenu = document.getElementById("nav-list-mobile");
containerMenu.addEventListener("click", mobileMenu);