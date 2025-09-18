if (typeof player === 'undefined') {
    console.error("Player object not found! Mod cannot apply.");
} else {

    player.ammo = 10; 
    player.maxAmmo = 10; 
    player.reloading = false; 

    const originalShoot = shoot;

    shoot = function() {
        if (player.reloading) return; 
        if (player.ammo <= 0) {
            console.log("No ammo! Press R to reload.");
            return;
        }

        player.ammo--;
        console.log(`Shot fired! Ammo left: ${player.ammo}`);
        originalShoot(); 
    };

    reload = function() {
        if (player.reloading) return;
        player.reloading = true;
        console.log("Reloading...");
        setTimeout(() => {
            player.ammo = player.maxAmmo;
            player.reloading = false;
            console.log("Reloaded! Ammo full.");
        }, 2000); 
    };

    document.addEventListener('keydown', function(e) {
        if (e.key === 'r' || e.key === 'R') {
            reload();
        }
    });

    console.log("Shooting mod loaded: ammo & reload added!");
}
