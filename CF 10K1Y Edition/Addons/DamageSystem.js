function registerMod() {
    console.log("[DamageSystem] Overhaul loaded");

    const bodyParts = [
        { name: "Head",    hp: 35, max: 35 },
        { name: "Chest",   hp: 80, max: 80 },
        { name: "Stomach", hp: 65, max: 65 },
        { name: "Left Arm",hp: 45, max: 45 },
        { name: "Right Arm",hp: 45, max: 45 },
        { name: "Left Leg",hp: 50, max: 50 },
        { name: "Right Leg",hp: 50, max: 50 }
    ];

    function totalHP() {
        return bodyParts.reduce((s,p)=>s + p.hp,0);
    }

    if (typeof player !== "undefined") {
        Object.defineProperty(player,"hp",{
            get(){ return totalHP(); },
            set(v){
                const ratio = v / totalHP();
                bodyParts.forEach(p=>{ p.hp = Math.max(0, Math.round(p.hp * ratio)); });
                refreshGUI();
            }
        });
    }

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
        gui.innerHTML = `<b>Total HP: ${totalHP()}</b><hr style='border-color:#44ff44'>`;
        bodyParts.forEach(p=>{
            const percent = Math.max(0, Math.round((p.hp / p.max)*100));
            gui.innerHTML += `${p.name}: ${p.hp}/${p.max} (${percent}%)<br>`;
        });
    }

    function rand(min,max){ return Math.floor(Math.random()*(max-min+1))+min; }

    function applyRandomDamage(){
        const part = bodyParts[Math.floor(Math.random()*bodyParts.length)];
        const radiation = Math.random()<0.5;
        const dmg = radiation ? rand(3,7) : rand(4,10);
        part.hp = Math.max(0, part.hp - dmg);
        console.log(`[DamageSystem] ${radiation ? "☢️ Radiation" : "☣️ Acid rain"} damaged ${part.name} for ${dmg} HP`);
        refreshGUI();
    }

    const damageTimer = setInterval(applyRandomDamage, 1000);
    window.addEventListener("beforeunload", ()=>clearInterval(damageTimer));

    function heal(amount){
        const injured = bodyParts.filter(p=>p.hp<p.max);
        if(injured.length===0) return;
        let left = amount;
        while(left>0 && injured.some(p=>p.hp<p.max)){
            for(let p of injured){
                if(left<=0) break;
                if(p.hp<p.max){
                    p.hp++;
                    left--;
                }
            }
        }
        refreshGUI();
    }

    if (typeof MiniMedkit !== "undefined") {
        MiniMedkit.onUse = ()=>heal(25);
    }
    if (typeof NMedkit !== "undefined") {
        NMedkit.onUse = ()=>heal(50);
    }

    refreshGUI();
}
