// libreri dari alre2
function showSuccessAlert() {
    Swal.fire({
        icon: 'success',
        title: 'Pesan berhasil dikirim!',
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            container: 'swal-center'
        }
    });
}

// SweetAlert2  error
function showErrorAlert(message) {
    Swal.fire({
        icon: 'error',
        title: 'Terjadi kesalahan',
        text: message,
        confirmButtonText: 'OK',
        customClass: {
            container: 'swal-center'
        }
    });
}
