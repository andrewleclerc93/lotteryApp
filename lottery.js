const powerball = document.getElementById('powerball');
const megaMillions = document.getElementById('megaMillions');
const pball_numbers = document.getElementsByClassName('pball_numbers');
const mega_numbers = document.getElementsByClassName('megaMillions_numbers');
var duplicates = [];
var powerballNum;

var pBallGame = {
    balls: 5,
    min: 1,
    max: 70,
    class: 'pball_numbers btn btn-secondary rounded-circle m-1',
    pBallClass: 'pball_numbers btn btn-danger rounded-circle m-1',
    style: 'width: 43.25px; height: 38px',
    element: powerball_numbers
};

var megaMillGame = {
    balls: 5,
    min: 1,
    max: 69,
    class: 'megaMillions_numbers btn btn-secondary rounded-circle m-1',
    pBallClass: 'megaMillions_numbers btn btn-warning rounded-circle m-1',
    style: 'width: 43.25px; height: 38px',
    element: megaMillions_numbers
};

// Clear any balls from a previous game.
function new_game() {
    duplicates.length = 0;
}

// Check if number is already in the array
function inArray(arr, el) {
    for (var i = 0; i < arr.length; i++)
        if (arr[i] == el) return true;
    return false;
}

// Generate a random number, check if already inArray, push to array
function getRandomIntNoDuplicates(min, max, DuplicateArr) {
    var RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (DuplicateArr.length > (max - min)) return false;  // break endless recursion
    if (!inArray(DuplicateArr, RandomInt)) {
        DuplicateArr.push(RandomInt);
        return RandomInt;
    }
    return getRandomIntNoDuplicates(min, max, DuplicateArr);  //recurse

}

// generate the Powerball number
function getPowerball(upper) {
    powerballNum = Math.floor(Math.random() * upper) + 1;
}

// Draw the contents of the array to the screen
function draw(game) {
    var element = game.element;
    duplicates.forEach(function (item) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(item);
        node.setAttribute('class', game.class);
        node.setAttribute('style', game.style);
        node.appendChild(textnode);
        element.appendChild(node);
    });

    var node = document.createElement("LI");
    var textnode = document.createTextNode(powerballNum);
    node.setAttribute('class', game.pBallClass);
    node.setAttribute('style', game.style);
    node.appendChild(textnode);
    element.appendChild(node);
}

powerball.addEventListener('click', () => {
    new_game();
    getPowerball(26);
    for (var i = 0; i < 5; i++) {
        getRandomIntNoDuplicates(1, 70, duplicates);
    }
    draw(pBallGame);
});


megaMillions.addEventListener('click', () => {
    new_game();
    getPowerball(25);
    for (var i = 0; i < 5; i++) {
        getRandomIntNoDuplicates(1, 70, duplicates);
    }
    draw(megaMillGame);
});
