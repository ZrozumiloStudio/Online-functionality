(function() {

    document.body.style.background = "linear-gradient(to bottom, #ffecd2, #fcb69f)"; 

    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        canvas.style.filter = "contrast(1.3) saturate(1.5) hue-rotate(-10deg) brightness(1.05)";
        canvas.style.background = "linear-gradient(180deg, rgba(255,205,150,0.6) 0%, rgba(255,150,100,0.4) 100%)";
    }

    const backgroundImages = document.querySelectorAll('img:not(#rpa):not(#photo):not(#spriteImage)');
    backgroundImages.forEach(img => {
        img.style.filter = "contrast(1.3) saturate(1.5) hue-rotate(-10deg)";
    });

    const ctx = canvas.getContext('2d');
    const dustParticles = [];
    const dustCount = 60;

    for (let i = 0; i < dustCount; i++) {
        dustParticles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2 + 1,
            speedY: Math.random() * 0.3 + 0.1,
            alpha: Math.random() * 0.2 + 0.05
        });
    }

    function drawDust() {
        dustParticles.forEach(p => {
            ctx.fillStyle = `rgba(255, 200, 120, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI);
            ctx.fill();

            p.y += p.speedY;
            if (p.y > canvas.height) p.y = 0;
        });
        requestAnimationFrame(drawDust);
    }

    drawDust();

    console.log("Mexican filter addon loaded");
})();
