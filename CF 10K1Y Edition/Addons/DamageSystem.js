function registerMod() {
    console.log("[DamageSystem] Addon loaded");

    const bodyParts = [
        { name: "Head",    hp: 35 },
        { name: "Chest",   hp: 80 },
        { name: "Stomach", hp: 65 },
        { name: "Left Arm",hp: 45 },
        { name: "Right Arm",hp: 45 },
        { name: "Left Leg",hp: 50 },
        { name: "Right Leg",hp: 50 }
    ];

    const gui = document.createElement("div");
    gui.id = "damageGUI";
    gui.style.position = "fixed";
    gui.style.left = "20px";
    gui.style.bottom = "20px";
    gui.style.padding = "10px";
    gui.style.background = "rgba(0,0,0,0.6)";
    gui.style.color = "#fff";
    gui.style.fontFamily = "monospace";
    gui.style.fontSize = "14px";
    gui.style.border = "2px solid #44ff44";
    gui.style.borderRadius = "8px";
    gui.style.zIndex = "2000";
    document.body.appendChild(gui);

    function refreshGUI() {
        gui.innerHTML = "<b>Radiation & Acid Damage</b><hr style='border-color:#44ff44'>";
        bodyParts.forEach(p=>{
            const percent = Math.max(0, Math.round((p.hp / maxHP(p.name))*100));
            gui.innerHTML += `${p.name}: ${p.hp}/${maxHP(p.name)} HP (${percent}%)<br>`;
        });
    }

    function maxHP(name){
        const ref = {
            "Head":35,"Chest":80,"Stomach":65,
            "Left Arm":45,"Right Arm":45,
            "Left Leg":50,"Right Leg":50
        };
        return ref[name];
    }

    refreshGUI();

    function applyRandomDamage(){
        const part = bodyParts[Math.floor(Math.random()*bodyParts.length)];
        const radiation = Math.random()<0.5;
        const dmg = radiation ? rand(3,7) : rand(4,10);
        part.hp = Math.max(0, part.hp - dmg);
        if(typeof player !== "undefined"){
            player.hp = Math.max(0, player.hp - Math.round(dmg/2));
        }
        const msg = radiation ? "☢️ Radiation" : "☣️ Acid rain";
        console.log(`[DamageSystem] ${msg} damaged ${part.name} for ${dmg} HP`);
        refreshGUI();
    }

    function rand(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

    const damageTimer = setInterval(applyRandomDamage, 1000);
    window.addEventListener("beforeunload", ()=>clearInterval(damageTimer));
}
