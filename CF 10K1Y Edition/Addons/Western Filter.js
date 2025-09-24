(function() {

    document.body.style.background = "linear-gradient(to bottom, #f5deb3, #deb887)";
    document.body.style.filter = "sepia(0.4) contrast(1.3) brightness(1.05)";

    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        canvas.style.filter = "grayscale(20%) sepia(50%) contrast(1.2) brightness(1.1)";
        canvas.style.background = "linear-gradient(180deg, rgba(222,184,135,0.6) 0%, rgba(139,69,19,0.5) 100%)";
    }

    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.style.filter = "sepia(0.5) contrast(1.2)";
    });

    const ctx = canvas.getContext('2d');
    function drawDust() {
        const width = canvas.width;
        const height = canvas.height;
        for (let i = 0; i < 50; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            ctx.fillStyle = `rgba(222, 184, 135, ${Math.random() * 0.2})`;
            ctx.beginPath();
            ctx.arc(x, y, Math.random() * 3, 0, 2 * Math.PI);
            ctx.fill();
        }
        requestAnimationFrame(drawDust);
    }

    drawDust();

    console.log("Western addon loaded");
})();
