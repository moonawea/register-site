function validateForm(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (
        username.length >= 3 &&
        firstname.length >= 3 &&
        lastname.length >= 3 &&
        email !== "" &&
        password.length >= 3 &&
        password.length <= 8 &&
        password === confirmPassword
    ) {
        alert("Форма отправлена успешно!");

    } else {
        alert("Пожалуйста, проверьте введенные данные.");
    }
}

