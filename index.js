// var attempt = 6; // Variable to count number of attempts.
// // Below function Executes on click of login button.
// function validate(){
// var email = document.getElementById("email").value;
// var password = document.getElementById("password").value;
// if ( email == "arifrivai12@gmail.com" && password == "1234"){
// alert ("Login Sukses");
// window.location = "file:///D:/MUHAMMAD%20ARIF%20RIVAI/HTML/Sekolah%20Vbootstrap/login/indexLogin.html";
// return false;
// }
// else{
// attempt --;
// alert("password Salah "+attempt+" kali kesempatan;");
// alert("NOTE MASUKAN EMAIL DAN PASSWORD INI!!!");
// alert("Email : arifrivai12@gmail.com || Password : 1234")
// if( attempt == 0){
// document.getElementById("email").disabled = true;
// document.getElementById("password").disabled = true;
// document.getElementById("submit").disabled = true;
// return false;
// }
// }
// }

// function validateForm() {
//     if (document.forms["formPendaftaran"]["Nama"].value == "") {
//         alert("Nama Tidak Boleh Kosong");
//         document.forms["formPendaftaran"]["Nama"].focus();
//         return false;
//     }
//     if (document.forms["formPendaftaran"]["email"].value == "") {
//         alert("Email Tidak Boleh Kosong");
//         document.forms["formPendaftaran"]["email"].focus();
//         return false;
//     }
//     if (document.forms["formPendaftaran"]["jurusan"].selectedIndex < 1) {
//         alert("Pilih Jurusan.");
//         document.forms["formPendaftaran"]["jurusan"].focus();
//         return false;
//     }
// }

function validasi() {
    var nama = document.getElementById("nama").value;
    if (nama != "") {
        alert('Pendaftaran Berhasil');

    }else{
        alert('Anda harus mengisi data dengan lengkap !');
    }
}