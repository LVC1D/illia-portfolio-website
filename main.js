// for the banner interactivity

const showAboutMyself = () => {
    let newPara = document.createElement('p');
    newPara.innerHTML = 'An ambitious self-taught Full-Stack developer, half-Ukrainian and half-Swiss, dedicated to switch from Marketing and Sales fully into the realms of Software Engineering!'
    document.getElementById('headings').appendChild(newPara);
    document.getElementById('headings').addEventListener('mouseout', () => {
    document.getElementById('headings').removeChild(newPara); 
    })
}

let h2 = document.getElementById('sub-header');
h2.addEventListener('mouseover', showAboutMyself);

// For the Skillset interactivity

let htmlButton = document.getElementById('html-more');
let cssButton = document.getElementById('css-more');
let jsButton = document.getElementById('js-more');
let gitButton = document.getElementById('git-more');

const addHtmlContext = () => {
    let htmlMore = document.createElement('p');
    htmlMore.innerHTML = 'I have mastered the foundations of establishing a robust structure of a webpage using semantic HTML syntaxing.';
    htmlMore.style.fontSize = '0.7rem';
    htmlMore.style.letterSpacing = '0.05rem';
    document.getElementById('html-item').appendChild(htmlMore);
    htmlButton.style.display = 'none';
}

const addCssContext = () => {
    let cssMore = document.createElement('p');
    cssMore.innerHTML = 'I have solidified the styling and positioning the content of the webpages in a way that is not misleading, pleasant to browse through and cohesive to fully understand the content laid out, using tools such as Flexbox and Grid.';
    cssMore.style.fontSize = '0.7rem';
    cssMore.style.letterSpacing = '0.05rem';
    document.getElementById('css-item').appendChild(cssMore);
    cssButton.style.display = 'none';
}

const addJsContext = () => {
    let jsMore = document.createElement('p');
    jsMore.innerHTML = 'Front-end-wise, I have learned the fundamental ways of implementing the interactivity into any webpage by providing additional cues that a user can interact with to get more out of the experience visitng a given website.';
    jsMore.style.fontSize = '0.7rem';
    jsMore.style.letterSpacing = '0.05rem';
    document.getElementById('js-item').appendChild(jsMore);
    jsButton.style.display = 'none';
}

const addGitContext = () => {
    let gitMore = document.createElement('p');
    gitMore.innerHTML = 'With the help of bash and git commands, I can streamline the workflow of working on projects locally and remotely, whether that\'s independent or collaborative work on GitHub.';
    gitMore.style.fontSize = '0.7rem';
    gitMore.style.letterSpacing = '0.05rem';
    document.getElementById('git-item').appendChild(gitMore);
    gitButton.style.display = 'none';
}

htmlButton.onclick = addHtmlContext;
cssButton.onclick = addCssContext;
jsButton.onclick = addJsContext;
gitButton.onclick = addGitContext;