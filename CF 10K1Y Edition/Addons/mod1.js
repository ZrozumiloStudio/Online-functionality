function registerMod(game) {
    console.log("Mod loaded: My Cool Mod");
    
    game.player.speed *= 2;
    
    const superMedkit = new game.Item("Super Medkit", 100, p => { p.hp += 100 });
    game.player.inventory.addItem(superMedkit);
}
