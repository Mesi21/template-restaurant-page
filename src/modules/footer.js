function fullFooter() {
    const footNote = document.createElement('footer');
    footNote.setAttribute('class', 'container-fluid');
    const author = document.createElement('p');
    author.innerHTML = '2019 &copy; Molnar Emese';
    author.setAttribute('id','auth');
    footNote.appendChild(author);
    return footNote;
}

export default fullFooter;