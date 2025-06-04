function generatePassword() {
    const length = document.getElementById("length").value;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSpecial = document.getElementById("includeSpecial").checked;

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecial) charset += "!@#$%^&*()_+[]{}|;:,.<>?";

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("generatedPassword").textContent = password;
}

function copyPassword() {
    const passwordText = document.getElementById("generatedPassword").textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText)
            .then(() => alert('Passwort kopiert!'))
            .catch(() => alert('Fehler beim Kopieren des Passworts.'));
    } else {
        alert('Kein Passwort generiert!');
    }
}