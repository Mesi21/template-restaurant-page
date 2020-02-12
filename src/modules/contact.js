const contactPage = () => {
  const contact = document.createElement('contact');
  contact.setAttribute('id', 'contactContainer');

  const contactTitle = document.createElement('h1');
  contactTitle.innerHTML = 'Contact Us';
  contact.appendChild(contactTitle);

  const contactDetails = document.createElement('div');
  contactDetails.setAttribute('id', 'contact-details');
  contactDetails.innerHTML = '<h3>We are located in Tirgu Mures</h3>'
    + '<p>No. 10, The Name Of The Street</p>'
    + '<p>Name of County, Country</p>'
    + '<p>999999</p>'
    + '<h3>Phone number:</h3>'
    + '<p>+40 999 999</p>'
    + '<br>';

  contact.appendChild(contactDetails);
  return contact;
};

export default contactPage;
