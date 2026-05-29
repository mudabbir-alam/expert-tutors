window.addEventListener("load", async () => {
    try {
        const fontPromise = Promise.all([
            document.fonts.load('400 1em "Material Icons"'),
            document.fonts.load('500 1em "Material Icons"'),
            document.fonts.load('600 1em "Material Icons"'),
            document.fonts.load('700 1em "Material Icons"'),
        ]);

        const timeOutPromise = new Promise((resolve) => {
            setTimeout(resolve, 5000);
        });

        await Promise.race([fontPromise, timeOutPromise]);


        await new Promise((resolve) => setTimeout(resolve, 300));

        const skeleton = document.getElementById("skeleton");
        const app = document.getElementById("app");
        skeleton.remove();
        app.classList.remove("hidden");
    } catch (error) {
        console.log(error);
    }
});
