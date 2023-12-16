export const enableBtn = (btnId) => {
  const btn = document.getElementById(btnId);
  btn.disabled = false;
  btn.style.cssText += 'opacity: 1';
};

export const disableBtn = (btnId) => {
  const btn = document.getElementById(btnId);
  btn.disabled = true;
  btn.style.cssText += 'opacity: 0.5';
};
