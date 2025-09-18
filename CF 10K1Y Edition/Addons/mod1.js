function registerMod() {
    console.log("Mod loaded: My Cool Mod");
    
    game.player.speed *= 2;
    
    const superMedkit = new Item("Super Medkit", 100, p => { p.hp += 100 });
    player.inventory.addItem(superMedkit);
}
