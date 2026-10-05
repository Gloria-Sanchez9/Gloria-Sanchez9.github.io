const skillbar = () => {
  const skillBars = document.querySelectorAll(".skill");
  skillBars.forEach((skillBar) => {
    const fill = skillBar.querySelector(".skill-bar__fill");
    const percentage = skillBar.querySelector(".skill-percent");
    const progress = parseInt(fill.getAttribute("data-progress"), 10);
    fill.style.width = `${progress}%`;

    // Si la barra tiene data-label (ej. B2, A1, Nivel K), se deja ese texto
    // tal cual en lugar de mostrar el porcentaje.
    if (fill.hasAttribute("data-label")) return;

    let counter = 0;
    const interval = setInterval(() => {
      if (counter <= progress) {
        percentage.textContent = `${counter}%`;
        counter++;
      } else {
        clearInterval(interval);
      }
    }, 1500 / progress);
  });
};
export default skillbar;
