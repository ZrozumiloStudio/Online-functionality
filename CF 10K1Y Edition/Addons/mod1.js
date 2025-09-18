(function(){
    const btn = document.createElement('button');
    btn.textContent = 'test';
    Object.assign(btn.style, {
        position: 'fixed',
        top: '20px',
        right: '150px',
        padding: '10px 20px',
        background: '#333',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        zIndex: 9999
    });
    btn.onclick = () => alert('Test button clicked!');
    document.body.appendChild(btn);
    console.log('[TestButton Mod] кнопка test создана');
})();
