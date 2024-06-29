const waifu = ['Shiroko 😻', 'Towa 😇', 'Ai Hoshino 🤩', 'Chisato 😎', 'Siesta 😛', 'Kaori 💀', 'Shiina 😋', 'speedwagon waifu 😱'];

function getWaifu() {
    const randomIndex = Math.floor(Math.random() * waifu.length);
    const randomWaifu = waifu[randomIndex];
   document.getElementById('randomWaifu').textContent = randomWaifu
}