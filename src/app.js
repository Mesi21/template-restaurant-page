import './style/style.css';
import fullHeader from './modules/header'
import fullFooter from './modules/footer'
import mainSection from './modules/mainPage'
import contactPage from './modules/contact'

function createNavigation() {
  
    const about = getElementById('about');
    const menu = getElementById('menu');
    const staff = getElementById('staff');
    const contact = getElementById('contact');
  
    about.addEventListener('click', aboutPage);
    menu.addEventListener('click', menuPage);
    staff.addEventListener('click', staffPage);
    contact.addEventListener('click', linkToContact);

    const linkToContact = () => {
      document.getElementById('contact').setAttribute('a', contactPage);
    }
  }

document.body.appendChild(fullHeader());
document.body.appendChild(mainSection());
document.body.appendChild(fullFooter());
