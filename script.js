document.addEventListener("DOMContentLoaded", function() {

    // Pesan pembuka (opsional — bisa dihapus kalau tidak mau)
    alert("Selamat membaca surat cinta ini! ❤️");

    const heartsContainer = document.querySelector(".hearts");

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("falling-heart");

        // Pilih emoji hati secara acak
        const hearts = ["💖", "💗", "💓", "❤️", "💘", "💞", "💝"];
        heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

        // Posisi awal acak dari kiri layar
        heart.style.left = Math.random() * 100 + "vw";

        // Ukuran acak
        const size = Math.random() * 20 + 15; // 15px - 35px
        heart.style.fontSize = size + "px";

        // Kecepatan jatuh acak
        const duration = Math.random() * 3 + 4; // 4 - 7 detik
        heart.style.animationDuration = duration + "s";

        heartsContainer.appendChild(heart);

        // Hapus setelah animasi selesai (biar tidak menumpuk)
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Buat hati setiap 300ms
    setInterval(createHeart, 300);

});
