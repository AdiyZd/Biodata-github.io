document.getElementById('banana').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form submit standar

    // Ambil nilai dari form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let keterangan = document.getElementById('Pesan').value; // Pastikan ID sesuai

    // Info token
    let id = '7355777672'; // Chat ID
    let user = '7504445457:AAFbAe8kIMiCFiSJCxsizNy-6T8sPvP5kbY'; // Token Bot

    // Format pesan dari input user
    let mycomentar = `Nama: ${name}\nEmail: ${email}\nPesan: ${keterangan}`;

    // URL untuk API Telegram
    let URL = `https://api.telegram.org/bot${user}/sendMessage`;

    // Mengirim request ke API Telegram
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Penulisan header yang benar
        },
        body: JSON.stringify({
            chat_id: id,
            text: mycomentar
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            alert("Pesan berhasil dikirim! Terima kasih! 🤗");
        } else {
            alert("Gagal mengirim pesan. Silahkan cek koneksi internet atau coba lagi nanti. 😪");
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Terjadi kesalahan sistem. Silahkan tunggu beberapa saat dan coba lagi.");
    });
});
