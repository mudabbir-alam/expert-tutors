window.addEventListener("load", () => {
    const skeleton = document.getElementById("skeleton");
    const app = document.getElementById("app");

    setTimeout(() => {
        skeleton.classList.add("hidden");
        app.classList.remove("hidden");
    }, 200);
});
