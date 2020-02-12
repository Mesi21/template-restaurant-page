const fullHeader = () => {
    const mainHeader = document.createElement('header');
    mainHeader.setAttribute('class', 'container-fluid')
    mainHeader.setAttribute('id', 'header')
    
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

    let navTabs = ['About', 'Menu', 'Staff', 'Contact'];

    navTabs.forEach((tab) => {
        let tabName = document.createElement('li');
        tabName.setAttribute('id', `${tab}`);
        tabName.innerHTML = `${tab}`;
        navBar.appendChild(tabName);   
    })

    right.appendChild(navBar);
    mainHeader.appendChild(right);

    return mainHeader; 
    
}

export default fullHeader;

