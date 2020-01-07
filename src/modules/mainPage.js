function mainSection() {
    const description = document.createElement('div');
    description.setAttribute('id', 'welcome-container');

    const welcome = document.createElement('h1');
    welcome.setAttribute('id','welcome-message');
    welcome.textContent = 'Welcome to Our Restaurant\'s Website!';

    description.appendChild(welcome);

    const message = document.createElement('h4');
    message.setAttribute('id', 'short-description');
    message.textContent = 'Our restaurant is located in the heart of Transylvania and offers you a great variety of local food. Feel free to try out our menu!';

    description.appendChild(message);

    return description;
}

export default mainSection;
