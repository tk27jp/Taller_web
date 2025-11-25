const mensajes = [
    "Bienvenido a mi perfil ✨",
    "Gracias por visitar 💖",
    "Sígueme en mis redes 🌸"
];

let index = 0;

setInterval(() => {
    const el = document.querySelector(".desc");
    if (el) {
        el.textContent = mensajes[index];
        index = (index + 1) % mensajes.length;
    }
}, 3000);
