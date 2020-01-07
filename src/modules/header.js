function fullHeader() {
    const mainHeader = document.createElement('header');
    mainHeader.setAttribute('class', 'container-fluid')
    
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
    navBar.setAttribute('id', 'navbar');
    navBar.setAttribute('class', 'list-group')

    const about = document.createElement('li');
    about.innerHTML = '<a href="#" id="about">ABOUT</a>';
   
    const menu = document.createElement('li');
    menu.innerHTML = '<a href="#" id="menu">MENU</a>';
    
    const staff = document.createElement('li');
    staff.innerHTML = '<a href="#" id="staff">STAFF</a>';

    const contact = document.createElement('li');
    contact.innerHTML = '<a href="#" id="contact">CONTACT</a>';

    navBar.appendChild(about);
    navBar.appendChild(menu);
    navBar.appendChild(staff);
    navBar.appendChild(contact);
    right.appendChild(navBar);
    mainHeader.appendChild(right);

    return mainHeader; 
    
}

export default fullHeader;

