// Verificar nombre en página principal
document.addEventListener('DOMContentLoaded', function() {
    const leerCartaBtn = document.getElementById('leerCartaBtn');
    const nameMessage = document.getElementById('nameMessage');
    
    leerCartaBtn.addEventListener('click', function() {
        const nombre = prompt('💕 Solo podes leerla si pones el nombre de mi unico amor:');
        
        if (nombre && nombre.toLowerCase().includes('evelin')) {
            window.location.href = 'carta.html';
        } else {
            nameMessage.textContent = '😉 Solo Evelin puede leer esta carta tan especial...';
            nameMessage.classList.remove('hidden');
            nameMessage.classList.add('error-message');
            
            setTimeout(() => {
                nameMessage.classList.add('hidden');
                nameMessage.classList.remove('error-message');
            }, 3000);
        }
    });
});

// Configurar página de la carta
if (window.location.pathname.includes('carta.html')) {
    // Música de fondo
    const audio = document.getElementById('backgroundMusic');
    const volverBtn = document.getElementById('volverBtn');
    
    // Botón volver
    volverBtn.addEventListener('click', function() {
        if (confirm('empezamos de nuevo? como lo volveria a intentar con vos una y otra vez')) {
            window.location.href = 'index.html';
        }
    });
    
    // Reproducir música al cargar
    window.addEventListener('load', function() {
        audio.play().catch(e => console.log('Autoplay bloqueado'));
    });
    
    // Control de música con click
    document.addEventListener('click', function() {
        audio.play().catch(e => {});
    }, { once: true });
}