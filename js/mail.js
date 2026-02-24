// Ensure script runs ONLY after page is fully loaded
window.addEventListener('DOMContentLoaded', (event) => {

    const contactForm = document.getElementById("contact-form");
    const btn = document.getElementById("sendMailBtn");

    // Check if both elements exist to avoid errors
    if (contactForm && btn) {

        btn.addEventListener("click", function (e) {
            // Stop form from refreshing the page
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                alert("Please fill all fields");
                return;
            }

            const subject = "Portfolio Contact from " + name;
            const body =
                "Name: " + name + "\n" +
                "Email: " + email + "\n\n" +
                "Message:\n" + message;

            const mailtoLink =
                "mailto:rajdeepex5270@gmail.com" +
                "?subject=" + encodeURIComponent(subject) +
                "&body=" + encodeURIComponent(body);

            // Open the mail app
            window.location.href = mailtoLink;
        });

    } else {
        console.error("Form or Button not found! Make sure IDs 'contact-form' and 'sendMailBtn' are correct in HTML.");
    }
});