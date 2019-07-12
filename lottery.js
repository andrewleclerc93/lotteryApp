const powerball = document.getElementById('powerball');
const megaMillions = document.getElementById('megaMillions');
const pball_numbers = document.getElementsByClassName('pball_numbers');
const mega_numbers = document.getElementsByClassName('megaMillions_numbers');
const clear_powerball = document.getElementById('clear_powerball');
const clear_megaMillions = document.getElementById('clear_megaMillions');
const powerball_numbers = document.getElementById('powerball_numbers');
var duplicates = [];
var powerballNum;

var pBallGame = {
    balls: 5,
    min: 1,
    max: 69,
    class: 'pball_numbers btn btn-secondary rounded-circle m-1',
    pBallClass: 'pball_numbers btn btn-danger rounded-circle m-1',
    style: 'width: 43.25px; height: 38px',
    element: powerball_numbers,
    clearBtn: clear_powerball
};

var megaMillGame = {
    balls: 5,
    min: 1,
    max: 70,
    class: 'megaMillions_numbers btn btn-secondary rounded-circle m-1',
    pBallClass: 'megaMillions_numbers btn btn-warning rounded-circle m-1',
    style: 'width: 43.25px; height: 38px',
    element: megaMillions_numbers,
    clearBtn: clear_megaMillions
};




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
    var clearBtn = game.clearBtn;
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
    clearBtn.style.display = "inline-block";
}

function new_game(game) {
    var childNodes = document.getElementById(game).childNodes;
    for (var i = childNodes.length-1; i >= 0; i--) {
        var childNode = childNodes[i];
        childNode.parentNode.removeChild(childNode);
    }
}


//   -- EVENT LISTENERS --   //

// Powerball 'Pick Numbers' button
powerball.addEventListener('click', () => {
    duplicates = [];
    getPowerball(26);
    for (var i = 0; i < 5; i++) {
        getRandomIntNoDuplicates(1, 70, duplicates);
    }
    draw(pBallGame);
});

// Powerball 'Clear' button
clear_powerball.addEventListener('click', () => {
    var game = 'powerball_numbers';
    var clearBtn = pBallGame.clearBtn;
    new_game(game);
    clearBtn.style.display = "none";
});

// Mega Millions 'Pick Numbers' button
megaMillions.addEventListener('click', () => {
    duplicates = [];
    getPowerball(25);
    for (var i = 0; i < 5; i++) {
        getRandomIntNoDuplicates(1, 70, duplicates);
    }
    draw(megaMillGame);
});

// Mega Millions 'Clear' button
clear_megaMillions.addEventListener('click', () => {
    var game = 'megaMillions_numbers';
    var clearBtn = megaMillGame.clearBtn;
    new_game(game);
    clearBtn.style.display = "none";
});
