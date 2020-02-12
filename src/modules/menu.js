const menuPage = () => {
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menuContainer');
    
    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = 'Our Menu';
    menu.appendChild(menuTitle);

    const menuBar = document.createElement('ul');
    menuBar.setAttribute('id', 'menubar');

    let menuTabs = ['Burger', 'Fried Chicken', 'Potato Chips', 
       'Mushroom soup', 'Vegetable Fried Rice', 'French Onion Soup'];

    menuTabs.forEach((tab) => {
        let tabName = document.createElement('li');
        tabName.setAttribute('id', `${tab}`);
        tabName.innerHTML = `${tab}`;
        menuBar.appendChild(tabName);   
    });

    menu.appendChild(menuBar);
    return menu;
}

export default menuPage;