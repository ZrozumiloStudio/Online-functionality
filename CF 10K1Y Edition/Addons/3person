(function() {

    if (typeof player === "undefined" || typeof canvas === "undefined") {
        console.error("ThirdPersonAddon: player or canvas not found");
        return;
    }

    console.log("ThirdPersonAddon loaded!");

    const thirdPersonSpriteURL = "https://img.freepik.com/premium-photo/businessman-3d-character_172429-440.jpg?semt=ais_hybrid&w=740&q=80"; 
    const thirdPersonSprite = new Image();
    thirdPersonSprite.src = thirdPersonSpriteURL;

    const cameraOffset = {
        x: -50,
        y: -50
    };

    function renderThirdPerson() {
        const ctx = canvas.getContext("2d");
        if (!thirdPersonSprite.complete) return;

        const drawX = player.x + cameraOffset.x;
        const drawY = player.y + cameraOffset.y;

        const spriteWidth = 50;  
        const spriteHeight = 50;

        ctx.save();
        ctx.translate(drawX, drawY);
        ctx.rotate(player.direction); 
        ctx.drawImage(thirdPersonSprite, -spriteWidth/2, -spriteHeight/2, spriteWidth, spriteHeight);
        ctx.restore();
    }

    const originalGameLoop = window.gameLoop;
    window.gameLoop = function() {
        originalGameLoop();
        renderThirdPerson();
    };

})();
