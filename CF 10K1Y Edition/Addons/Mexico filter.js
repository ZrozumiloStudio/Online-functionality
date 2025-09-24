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

    console.log("addon loaded");
})();
