function loadMod() {
    console.log("Test Mod Loaded!");

    const btn = document.createElement('button');
    btn.textContent = "Test";
    btn.style.position = "fixed";
    btn.style.bottom = "20px";
    btn.style.left = "20px";
    btn.style.padding = "10px 20px";
    btn.style.backgroundColor = "purple";
    btn.style.color = "white";
    btn.style.border = "none";
    btn.style.borderRadius = "5px";
    btn.style.cursor = "pointer";
    btn.style.zIndex = 1000;

    btn.onclick = () => {
        alert("Test button clicked!");
    };

    document.body.appendChild(btn);
}
