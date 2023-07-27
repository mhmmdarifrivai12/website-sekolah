function myFunction() {
    var txt;
    if (confirm("Yakin Ingin Keluar?")) {
        window.location = "file:///D:/MUHAMMAD%20ARIF%20RIVAI/HTML/Sekolah%20Vbootstrap/index.html";
    } else {
        txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
}