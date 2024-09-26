// Fungsi merubah background
function changeBackground() {
    var images = ["assets/img/bg1.jpg", "assets/img/bg2.jpg", "assets/img/bg3.jpg"];
    var i = 0;
    setInterval(function () {
        // change image ke #profile
        document.getElementById("profile").style.backgroundImage = "url(" + images[i] + ")";
        i = (i + 1) % images.length;
    }, 2500);
}
changeBackground();
// end

// Funtion effect ketik per huruf pada class title
function effectKetik() {
    let title = document.querySelector('.title');
    let text = title.textContent;
    let interval = null;
    let index = 0;
    let speed = 80; //atur kecepatan ketik per huruf
    title.textContent = '';
    interval = setInterval(function () {
        title.textContent += text[index];
        index++;
        if (index == text.length) {
            // clear Interval
            clearInterval(interval);
            interval = null;
        }
    }, speed);
}
// end

// Funtion Perubahan pada navbar ketika melakukan scroll pada nilai tertentu
function scrollNavbar(scrollPosition) {
    var navbar = document.getElementById("navigasi");
    if (scrollPosition > 100) {
        // Merubah background color dengan effect fade
        navbar.style.background = "#393E46";
        navbar.style.transition = "background-color 0.2s ease-in";
    } else {
        navbar.style.background = "none";
        navbar.style.transition = "background-color 0.2s ease-out";
    }
}
// end

// Membuat event listener pada window scroll
window.addEventListener("scroll", function () {
    scrollNavbar(window.scrollY);
});
// end

// Menghilangkan #id untuk button dengan class .nav-link
const navLink = document.querySelectorAll('.nav-link');
navLink.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const id = this.getAttribute('href');
        // Menghapus class active pada semua nav--link
        navLink.forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Menambahkan class active pada nav-link yang di klik
        this.classList.add('active');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth'
        });

        scrollNavbar(101);
    });
});

window.addEventListener("scroll", function () {
    // Membuat jika batas bawah pada section tertentu add class active pada navigasi
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.offsetTop - 500;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
            // Membuat class active pada nav-link yang sesuai
            document.querySelector(`.nav-link[href="#${section.id}"]`).classList.add('active');
            // Menghilangkan class active pada nav-link yang lain
            document.querySelectorAll('.nav-link').forEach(navLink => {
                if (navLink !== document.querySelector(`.nav-link[href="#${section.id}"]`)) {
                    navLink.classList.remove('active');
                }
            });
        }
    });
});

// DIgunakan untuk memunculkan popup inputan visitor name
// Mengecek apakah class tar_nama_visitor atribut data-name kosong?
const visitorName = document.getElementsByClassName('tar_nama_visitor');
if (visitorName.textContent == '' || visitorName.textContent == null) {
    // Membuat popup-pertanyaan display block
    document.querySelector('.popup-pertanyaan').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
}

function simpanDataVisitor() {
    // cek apakah inputan pada id nama_visitor ada isinya berupa huruf dan bukan angka ataupun simbol?
    const namaVisitor = document.getElementById('nama_visitor').value;

    if (namaVisitor.match(/^[a-zA-Z\s]+$/) && namaVisitor.length > 3) {
        let visitorName = document.querySelector('.tar_nama_visitor');
        // Membuat popup-pertanyaan display none
        document.querySelector('.popup-pertanyaan').style.display = 'none';
        document.querySelector('.overlay').style.display = 'none';
        // Terapkan inputan ke content pada class tar_nama_visitor berisi nama visitor
        visitorName.textContent = `Hai ${namaVisitor}, Welcome to my Website`;
        effectKetik();
    } else if (namaVisitor.length > 3) {
        document.getElementsByClassName('pesan_kesalahan')[0].textContent = 'Nama harus lebih dari 3 huruf';
    } else if (namaVisitor == '' || namaVisitor == null) {
        document.getElementsByClassName('pesan_kesalahan')[0].textContent = 'Mohon isi nama';
    } else {
        document.getElementsByClassName('pesan_kesalahan')[0].textContent = 'Nama hanya boleh huruf';
    }
}
// end

// function untuk form inputan message us
function validateForm() {
    const nama = document.getElementById('nama').value.trim();
    const tanggalLahir = document.getElementById('tanggal_lahir').value.trim();
    const jenisKelamin = document.querySelector('input[name="jenis_kelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value.trim();

    let isValid = true;
    let errorMessage = '';

    // Validasi nama
    if (nama === '') {
        isValid = false;
        errorMessage += 'Nama tidak boleh kosong.\n';
    }

    // Validasi tanggal lahir
    if (tanggalLahir === '') {
        isValid = false;
        errorMessage += 'Tanggal lahir tidak boleh kosong.\n';
    }

    // Validasi pesan
    if (pesan === '') {
        isValid = false;
        errorMessage += 'Pesan tidak boleh kosong.\n';
    }

    if (isValid) {
        // Masukkan data ke dalam div result-form
        document.getElementById('result-form').innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggalLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${jenisKelamin}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
      `;
    } else {
        alert(errorMessage); // Menampilkan pesan error
    }
}
// end

function humbergerEffect() {
    var navbar = document.getElementById("navigasi");
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block'; // Menampilkan menu
        menu.style.transform = 'translateY(0)';
        menu.style.transition = "all 0.2s ease-in";
        navbar.style.background = "#393E46";
        navbar.style.transition = "background-color 0.1s ease-in";
    } else {
        menu.style.display = 'none'; // Menyembunyikan menu
        menu.style.transition = "all 0.2s ease-out";
        navbar.style.background = "none";
        navbar.style.transition = "background-color 0.1s ease-out";
    }
}