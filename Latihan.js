function validateForm() {
  var nama_lengkap = document.getElementById("nama_lengkap").value.trim();
  var email = document.getElementById("email").value.trim();
  var alamat = document.getElementById("alamat").value.trim();

  if (nama_lengkap == "" || email == "" || alamat == "") {
    alert("Anda harus mengisi data dengan lengkap");
    return false;
  } else {
    alert("Email telah didaftarkan");
  }
  return false;

  return true;
}
