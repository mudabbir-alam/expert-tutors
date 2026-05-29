const faqs = document.getElementsByClassName("faq");

for (let i = 0; i < faqs.length; i++) {
    faqs[i].getElementsByTagName("button")[0].addEventListener("click", () => {
        faqs[i].classList.toggle("max-h-96");
        faqs[i].classList.toggle("max-h-16");
        let arrow = faqs[i]
            .getElementsByTagName("button")[0]
            .getElementsByTagName("span")[0];
        if (arrow.innerText === "keyboard_arrow_down") {
            arrow.innerText = "keyboard_arrow_up";
        } else {
            arrow.innerText = "keyboard_arrow_down";
        }
    });
}
