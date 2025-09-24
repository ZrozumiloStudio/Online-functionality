function registerMod() {
    console.log("Jump Addon loaded!");

    const jumpHeight = 50; 
    const jumpSpeed = 5;   
    let isJumping = false;
    let jumpVelocity = 0;

    const originalUpdate = window.update;
    window.update = function() {

        if (isJumping) {
            player.y -= jumpVelocity; 
            jumpVelocity -= 0.5; 
            if (player.y >= 60) { 
                player.y = 60;
                isJumping = false;
                jumpVelocity = 0;
            }
        }

        originalUpdate();
    };

    document.addEventListener("keydown", function(event) {
        if ((event.code === "Space" || event.key === " ") && !isJumping) {
            isJumping = true;
            jumpVelocity = jumpHeight / 10; 
        }
    });
}
