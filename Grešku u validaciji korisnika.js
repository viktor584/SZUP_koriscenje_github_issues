function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Primer korišćenja:
const email = "test@example.com";
if (isValidEmail(email)) {
    console.log("Email je ispravan.");
} else {
    console.log("Email je neispravan.");
}
