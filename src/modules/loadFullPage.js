import fullHeader from './header';
import fullFooter from './footer';
import mainSection from './mainS';

const pageInit = () => {
  const main = document.getElementById('content');
  const header = fullHeader();
  const mainSect = mainSection();
  const footer = fullFooter();

  main.appendChild(header);
  main.appendChild(mainSect);
  main.appendChild(footer);
  return main;
};

export default pageInit;
