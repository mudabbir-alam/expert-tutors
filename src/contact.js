import emailjs from "@emailjs/browser";

const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || phone === "" || education === "" || message === "") {
        alert("Please fill all the information correctly!");
        return;
    }

    emailjs
        .sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        )
        .then(() => {
            alert("Message Sent Successfully");
            form.reset();
        })
        .catch(() => {
            alert("Something went wrong");
        });
});
