document.getElementById('banana').addEventListener('submit', function (e) {
    e.preventDefault(); // gak boleh submit std

    // id dari html
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let keterangan = document.getElementById('Pesan').value;

    // Info token
    let id = '7355777672'; // chat id ke saya
    let user = '7504445457:AAFbAe8kIMiCFiSJCxsizNy-6T8sPvP5kbY'; // ser interaksi ke saya

    // text input yang akan di kirim ke telegram
    let mycomentar = `Nama: ${name}\nEmail: ${email}\nPesan: ${keterangan}`;

    // URL API Telegram
    let URL = `https://api.telegram.org/bot${user}/sendMessage`;

    // req api
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
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
