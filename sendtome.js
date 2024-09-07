document.getElementById('banana').addEventListener('submit', function (e) {
    e.preventDefault(); // Mencegah form dari reload page

    // Ambil nilai input dari form
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let keterangan = document.getElementById('Pesan').value;

    // Info token
    let id = '7355777672'; // chat id ke saya
    let user = '7504445457:AAFbAe8kIMiCFiSJCxsizNy-6T8sPvP5kbY'; // Token bot

    // Text input yang akan dikirim ke Telegram
    let mycomentar = `Nama: ${name}\nEmail: ${email}\nPesan: ${keterangan}`;

    // URL API Telegram
    let URL = `https://api.telegram.org/bot${user}/sendMessage`;

    // Kirim data ke Telegram
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
            // Tampilkan SweetAlert2 jika pengiriman berhasil
            showSuccessAlert();
        } else {
            // Tampilkan SweetAlert2 jika terjadi kesalahan
            showErrorAlert('Silahkan cek koneksi internet atau coba lagi nanti.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        // Tampilkan SweetAlert2 jika terjadi kesalahan sistem
        showErrorAlert('Silahkan tunggu beberapa saat dan coba lagi.');
    });
});
