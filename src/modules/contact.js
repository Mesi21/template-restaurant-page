function contactPage() {
    const contact = document.createElement('contact');
    contact.setAttribute('class', 'contact-container');
    
    const contactTitle = document.createElement('h1');
    contactTitle.innerHTML = 'Contact Us';
    contact.appendChild(contactTitle);

    const contactDetails = document.createElement('div');
    contactDetails.setAttribute('id','contact-details');

    return contact;
}

export default contactPage;