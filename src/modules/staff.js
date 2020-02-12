const staffPage = () => {
    const staff = document.createElement('div');
    staff.setAttribute('id', 'staffContainer');
    
    const staffTitle = document.createElement('h1');
    staffTitle.innerHTML = 'This is our staff: ';
    staff.appendChild(staffTitle);

    const staffList = document.createElement('div');
    staffList.setAttribute('id','contact-details');
    staffList.innerHTML =  
      '<h3>Head Chef</h3>' +
      '<p>Name One</p>' +
      '<h3>Chefs</h3>' +
      '<p>Name Two</p>' +
      '<p>Name Three</p>' +
      '<p>Name Four</p>' +
      '<br>' +
      '<h3>Waiters</h3>' +
      '<p>Name One</p>' +
      '<p>Name Two</p>' +
      '<p>Name Three</p>' +
      '<p>Name Four</p>' 

    staff.appendChild(staffList);  
    return staff;
}

export default staffPage;
