export const firework = () => {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.innerHTML = `
  <div id='firework_before'></div>
  <div id='firework_after'></div>
	  `;
  return firework;
};
