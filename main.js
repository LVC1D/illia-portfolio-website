let h1 = document.body.querySelector('h1');

const createP = () => {
    let paragraph = document.createElement('p');
    paragraph.innerHTML = 'I am a paragraph from JS';
    document.body.appendChild(paragraph);
}

h1.onclick = createP;