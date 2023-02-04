export const createUsefulLinkElement = (link) => {
  const element = document.createElement('ul');
  element.id = 'link';
  element.innerHTML = String.raw`
      
          <a href=${link.href} target="_blank">${link.text}</a>
          
        `;
  return element;
};
