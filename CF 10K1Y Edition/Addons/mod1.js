(function(){
    const btn = document.createElement('button');
    btn.textContent = 'TEST';
    btn.style.position = 'fixed';
    btn.style.top = '20px';
    btn.style.left = '20px';
    btn.style.zIndex = '9999';
    btn.onclick = ()=>alert('Test button clicked!');
    document.body.appendChild(btn);
})();
