const btnLogin = document.getElementById('btnLogin');
const inputUsername = document.getElementById('username');
const inputPassword = document.getElementById('password');


btnLogin.addEventListener('click', function() {
    const usernameValue = inputUsername.value;
    const passwordValue = inputPassword.value;

    if (usernameValue === "admin123" && passwordValue === "admin123") {
        alert("berhasil login");
    } else {
        alert("login gagal");
    }

    inputUsername.value = "";
    inputPassword.value = "";
});