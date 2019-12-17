function fullHeader() {
    const mainHeader = document.createElement('header');
    mainHeader.setAttribute('class', 'header')
    
    const left = document.createElement('div');
    left.setAttribute('id', 'left-h');
    
    const right = document.createElement('div');
    right.setAttribute('id', 'right-h');

    const restaurantName = document.createElement('h1');
    restaurantName.setAttribute('id', 'restName');
    restaurantName.innerHTML = 'Eat, Drink, Enjoy';
    left.appendChild(restaurantName);
    mainHeader.appendChild(left);

    const navBar = document.createElement('ul');
    navBar.setAttribute('id', 'menu');
    const about = document.createElement('li');
    about.innerHTML = 'ABOUT';
    const menu = document.createElement('li');
    menu.innerHTML = 'MENU';
    const staff = document.createElement('li');
    staff.innerHTML = 'STAFF';
    const contact = document.createElement('li');
    contact.innerHTML = 'CONTACT';
     
    navBar.appendChild(about);
    navBar.appendChild(menu);
    navBar.appendChild(staff);
    navBar.appendChild(contact);
    right.appendChild(navBar);
    mainHeader.appendChild(right);

    return mainHeader; 
}

export default fullHeader;

