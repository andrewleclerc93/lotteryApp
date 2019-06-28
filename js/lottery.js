const powerball = document.getElementById('powerball');
const megaMillions = document.getElementById('megaMillions');
const pball_numbers = document.getElementsByClassName('pball_numbers');
const mega_numbers = document.getElementsByClassName('megaMillions_numbers');
var duplicates = [];
var powerballNum;


// Clear any balls from a previous game.
function new_Pball_game() {
    while (pball_numbers.length !== 0) {
        pball_numbers[0].remove();
    }
}

// Clear any balls from a previous game
function new_MegaMillions_game() {
    while (mega_numbers.length !== 0) {
        mega_numbers[0].remove();
    }
}

function inArray(arr, el) {
    for(var i=0; i<arr.length; i++)
        if(arr[i] == el) return true;
    return false;
}

function getRandomIntNoDuplicates(min, max, DuplicateArr) {
    var RandomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    if (DuplicateArr.length > (max-min) ) return false;  // break endless recursion
    if(!inArray(DuplicateArr, RandomInt)) {
        DuplicateArr.push(RandomInt);
        return RandomInt;
    }
    return getRandomIntNoDuplicates(min, max, DuplicateArr);  //recurse
}

// generate the Powerball number
function getPowerball(upper) {
    powerballNum = Math.floor(Math.random() * upper ) + 1;
}

powerball.addEventListener('click', () => {

    new_Pball_game();
    getPowerball(26);

    for (var i=0; i<5; i++){
        getRandomIntNoDuplicates(1, 69 ,duplicates);
    }

    duplicates.forEach(function(item) {
        var node = document.createElement("LI");      
        var textnode = document.createTextNode(item);        
        node.setAttribute('class', 'pball_numbers btn btn-secondary rounded-circle m-1');
        node.appendChild(textnode);
        powerball_numbers.appendChild(node);
    });

    var node = document.createElement("LI");
    var textnode = document.createTextNode(powerballNum);
    node.setAttribute('class', 'pball_numbers btn btn-danger rounded-circle m-1');
    node.appendChild(textnode);
    powerball_numbers.appendChild(node);
});


megaMillions.addEventListener('click', () => {

    new_MegaMillions_game();
    getPowerball(25);
    
    for (var i=0; i<5; i++){
        getRandomIntNoDuplicates(1, 70 ,duplicates);
    }

    duplicates.forEach(function(item) {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(item);
        node.setAttribute('class', 'megaMillions_numbers btn btn-secondary rounded-circle m-1');
        node.appendChild(textnode);
        megaMillions_numbers.appendChild(node);
    });

    var node = document.createElement("LI");
    var textnode = document.createTextNode(powerballNum);
    node.setAttribute('class', 'megaMillions_numbers btn btn-warning rounded-circle m-1');
    node.appendChild(textnode);
    megaMillions_numbers.appendChild(node);
});
