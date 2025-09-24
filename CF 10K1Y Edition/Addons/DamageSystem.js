function registerMod() {

    const implants = [
        { name: "Neural Booster",   price: 100, apply(p){ p.speed += 0.5; alert("Скорость увеличена!"); } },
        { name: "Steel Bones",      price: 150, apply(p){ p.hp += 100;   alert("Запас HP увеличен!"); } },
        { name: "Optic Enhancer",   price: 120, apply(p){ rayLength += 50; alert("Дальность обзора повышена!"); } },
        { name: "Adrenal Pump",     price: 200, apply(p){ p.speed += 1; p.hp += 50; alert("Скорость и HP увеличены!"); } }
    ];

    const panel = document.createElement("div");
    panel.id = "implantPanel";
    panel.style.cssText = `
        position:fixed; top:50%; left:50%;
        transform:translate(-50%,-50%);
        width:320px; max-height:400px;
        background:rgba(0,0,0,0.85);
        color:#0ff; padding:15px;
        border:2px solid #0ff; border-radius:10px;
        display:none; overflow-y:auto;
        font-family:sans-serif; z-index:2000;
    `;
    panel.innerHTML = "<h3 style='text-align:center'>Cyborg Implants</h3>";
    document.body.appendChild(panel);

    function updateImplantUI(){
        panel.innerHTML = `<h3 style="text-align:center">Cyborg Implants</h3>
                           <p>XP: ${xp}</p>`;
        implants.forEach((imp,idx)=>{
            const btn = document.createElement("button");
            btn.textContent = `Buy ${imp.name} (${imp.price} XP)`;
            btn.style.cssText = `
                display:block;width:90%;margin:6px auto;
                padding:8px;background:#222;color:#0ff;
                border:none;border-radius:6px;cursor:pointer;
            `;
            btn.onmouseover = ()=>btn.style.background="#444";
            btn.onmouseout  = ()=>btn.style.background="#222";
            btn.onclick = ()=>{
                if(xp >= imp.price){
                    xp -= imp.price;
                    imp.apply(player);
                    updateImplantUI();
                } else {
                    alert("Недостаточно XP!");
                }
            };
            panel.appendChild(btn);
        });
    }

    function toggleImplants(){
        const show = panel.style.display === "none";
        panel.style.display = show ? "block" : "none";
        if(show) updateImplantUI();
    }

    document.addEventListener("keydown", e=>{
        if(e.key === "c" || e.key === "C") toggleImplants();
    });

    const li = document.createElement("li");
    li.textContent = "Cyborg Implants (press C)";
    li.style.background = "#0a0a23";
    li.onclick = toggleImplants;
    document.getElementById("modList").appendChild(li);

    console.log("Cyborg Implants Addon loaded");
}
