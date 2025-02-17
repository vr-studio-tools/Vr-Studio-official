// Laser Effect
document.addEventListener('mousemove', (e) => {
  const laser = document.createElement('div');
  laser.classList.add('laser');
  laser.style.left = `${e.pageX}px`;
  laser.style.top = `${e.pageY}px`;
  document.body.appendChild(laser);
  setTimeout(() => laser.remove(), 500);
});

// Date and Time
const dateElement = document.getElementById('date');
dateElement.textContent = new Date().toLocaleDateString();
