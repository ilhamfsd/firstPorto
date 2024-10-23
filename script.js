document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    });

    sections.forEach((section) => {
        observer.observe(section);
    });
});

// Mengubah gambar saat hover
document.getElementById("gambarUtama").addEventListener("mouseover", function() {
    
    this.src = "formal.jpg"; // Ganti dengan gambar baru saat hover
});

// Mengembalikan gambar ke awal saat kursor keluar
document.getElementById("gambarUtama").addEventListener("mouseout", function() {
    this.src = "foto.jpg"; // Kembalikan ke gambar awal
});


