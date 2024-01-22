let cardButton = document.getElementById('card-more');
let pButton = document.getElementById('paequor-more');
let mixedButton = document.getElementById('mixed-more');

const addCardContext = () => {
    let cardMore = document.createElement('p');
    cardMore.innerHTML = 'No matter whether you provide an array of card number digits, or a string of digits, there are functions that will check the validity of the card number, issue a list of the invalid ones and the companies that issues them. In addition, there is a funiton that converts invalid cad numbers into valid ones.';
    cardMore.style.fontSize = '0.7rem';
    cardMore.style.letterSpacing = '0.05rem';
    document.getElementById('card-checker').appendChild(cardMore);
    cardButton.style.display = 'none';
}

const addPContext = () => {
    let pMore = document.createElement('p');
    pMore.innerHTML = 'We have a factory funciton that can produce various DNA sequences to research different genetic bases of pAequor, how their complementary DNA\'s relate to each other, and we have a funciton that ca yield 30 valid DNA sequences o. the go.';
    pMore.style.fontSize = '0.7rem';
    pMore.style.letterSpacing = '0.05rem';
    document.getElementById('p-aequor').appendChild(pMore);
    pButton.style.display = 'none';
}

const addMixedContext = () => {
    let mixedMore = document.createElement('p');
    mixedMore.innerHTML = 'No matter the size of the strings\' array, as long as you have 3 of those - the funciton ca take those and produce some random messages for your leisure.';
    mixedMore.style.fontSize = '0.7rem';
    mixedMore.style.letterSpacing = '0.05rem';
    document.getElementById('mixed-messages').appendChild(mixedMore);
    mixedButton.style.display = 'none';
}

cardButton.onclick = addCardContext;
pButton.onclick = addPContext;
mixedButton.onclick = addMixedContext;