import './style/style.css';
import pageInit from './modules/loadFullPage';
import mainSection from './modules/mainS';
import menuPage from './modules/menu';
import staffPage from './modules/staff';
import contactPage from './modules/contact';

const createNav = () => {
  const home = document.getElementById('About');
  const menu = document.getElementById('Menu');
  const staff = document.getElementById('Staff');
  const contact = document.getElementById('Contact');
  const mainSect = document.getElementById('welcome-container');
  
  home.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(mainSection());
  });
    
  menu.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(menuPage());
  });
    
  staff.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(staffPage());
  });
  
  contact.addEventListener('click', () => {
    mainSect.innerHTML = '';
    mainSect.appendChild(contactPage());
  });
};

const load = () => {
    pageInit();
    createNav();
};

load();
