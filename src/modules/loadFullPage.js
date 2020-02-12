import fullHeader from './header';
import fullFooter from './footer';
import contacPage from './contact';
import menuPage from './menu';
import mainSection from './main';
import staffPage from './staff';

const pageInit = () => {
  const main = document.getElementById('content');
  const header = fullHeader();
  const mainSect = mainSection();
  const footer = fullFooter();

  main.appendChild(header);
  const home = document.getElementById('About');
  home.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(mainSection());
  });

  const menu = document.getElementById('Menu');
  menu.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(menuPage());
  });

  const staff = document.getElementById('Staff');
  staff.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(staffPage());
  });

  const contact = document.getElementById('Contact');
  contact.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(contacPage());
  });

  main.appendChild(mainSect);
  main.appendChild(footer);
  return main;
};

export default pageInit;
