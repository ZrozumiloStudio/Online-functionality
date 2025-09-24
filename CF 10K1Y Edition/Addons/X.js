function registerMod() {
    console.log("Horror Mod activated!");

    document.body.style.backgroundColor = "#0a0a0a";
    canvas.style.filter = "grayscale(100%) contrast(180%) brightness(0.6)";
    canvas.style.background = "radial-gradient(circle, #1a1a1a 0%, #000000 100%)";

    setInterval(() => {
        if (typeof rayLength !== "undefined" && rayLength > 50) {
            rayLength -= 0.5;
        }
    }, 500);

    setInterval(() => {
        const r = Math.floor(Math.random() * 50) + 50;
        canvas.style.boxShadow = `0 0 ${r}px rgba(255,0,0,0.2)`;
    }, 300);

    const X = { 
        x: Math.random() * 800 + 200, 
        y: Math.random() * 400 + 100 
    };
    sprites.push(X);

    const XImage = new Image();
    XImage.src = "https://grizly.club/uploads/posts/2022-12/1670870543_grizly-club-p-glaza-strashnie-png-6.jpg";

    const horrorSound = new Audio("https://cdn.pixabay.com/download/audio/2022/03/15/audio_9b0c3e4c41.mp3");
    horrorSound.loop = true;
    horrorSound.volume = 0.5;
    horrorSound.play();

    setInterval(() => {
        const whisper = new Audio("https://cdn.pixabay.com/download/audio/2022/02/23/audio_6b6e9eaa3a.mp3");
        whisper.volume = 0.3;
        whisper.play();
    }, 8000);

    setInterval(() => {
        if (Math.random() < 0.3) {
            X.x = player.x + (Math.random() * 200 - 100);
            X.y = player.y + (Math.random() * 200 - 100);
        }
    }, 4000);

    const origDrawSprites = drawSprites;
    drawSprites = function() {
        origDrawSprites();
        ctx.save();
        ctx.globalAlpha = 0.9;
        ctx.drawImage(XImage, X.x, X.y, 200, 200);
        ctx.restore();
    };

    setInterval(() => {
        if (player.hp > 0) {
            player.hp -= 1;
        }
    }, 1500);

    alert("Horror Mod enabled! Darkness is coming...");
}
