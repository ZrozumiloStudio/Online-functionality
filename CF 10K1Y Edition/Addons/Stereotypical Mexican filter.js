(function() {

    const canvas = document.getElementById('gameCanvas');
    if (canvas) {
        canvas.style.filter = "sepia(0.5) saturate(1.5) brightness(1.1) contrast(1.1)";
    }

    const backgroundImages = document.querySelectorAll('img:not(#rpa):not(#photo):not(#spriteImage)');
    backgroundImages.forEach(img => {
        img.style.filter = "sepia(0.5) saturate(1.5) brightness(1.1) contrast(1.1)";
    });

    document.body.style.background = "linear-gradient(to bottom, #fff2cc, #f7d07a)";

    console.log("Mexico filter addon loaded: warm, yellow/sepia tone applied, HUD untouched.");
})();
