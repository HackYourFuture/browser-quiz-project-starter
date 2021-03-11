('use strict');

import { openNavbar } from '../handlers/menubar.handler.js';
import { closeNavbar } from '../handlers/menubar.handler.js';

export const addMenuBarListener = () => {
  const menuBtn = document.querySelector('#menuBtn');
  menuBtn.addEventListener('click', openNavbar);
  const closeBtn = document.querySelector('#closeBtn');
  closeBtn.addEventListener('click', closeNavbar);
};
