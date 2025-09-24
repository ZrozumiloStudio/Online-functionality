function registerMod() {
    console.log("The fog is coming...");

    document.body.style.backgroundColor = "#0a0a0a";
    canvas.style.filter = "grayscale(100%) contrast(180%) brightness(1)";
    canvas.style.background = "radial-gradient(circle, #1a1a1a 0%, #000000 100%)";

    setInterval(() => {
        const r = Math.floor(Math.random() * 50) + 50;
        canvas.style.boxShadow = `0 0 ${r}px rgba(255,0,0,0.2)`;
    }, 300);

    setInterval(() => {
        if (player.hp > 0) {
            player.hp -= 1;
        }
    }, 1500);

    alert("The fog is coming...");
}
