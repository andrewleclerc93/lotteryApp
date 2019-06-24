const powerball = document.getElementById('powerball');
const megaMillions = document.getElementById('megaMillions');
const pball_numbers = document.getElementsByClassName('pball_numbers');
const mega_numbers = document.getElementsByClassName('megaMillions_numbers');
var numbers = [];

function new_Pball_game() {
    while (pball_numbers.length !== 0) {
        pball_numbers[0].remove();
    }
}

function new_MegaMillions_game() {
    while (mega_numbers.length !== 0) {
        mega_numbers[0].remove();
    }
}

function getNumber(upper) {
    let num = Math.floor(Math.random() * upper ) + 1;
    for(let i=0; i<numbers.length; i+=1) {
        if (num === numbers[i]) {
            i-1;
        }
    }
    numbers.push(num);
}
 

function getAllNumbers(balls, upper) {
    numbers = [];
    for(let i=0; i<balls; i+=1) {
    getNumber(upper);
    }
}

powerball.addEventListener('click', () => {

    new_Pball_game();
    getAllNumbers(6, 69);

    numbers.forEach(function(item) {
        var node = document.createElement("LI");      
        var textnode = document.createTextNode(item);        
        node.setAttribute('class', 'pball_numbers btn btn-secondary rounded-circle m-1');
        node.appendChild(textnode);
        powerball_numbers.appendChild(node);
    });

    // for (i = 0; i < 5; i += 1) {
    //     var random = Math.floor(Math.random() * (70));
    //     var node = document.createElement("LI");      
    //     var textnode = document.createTextNode(random);        
    //     node.setAttribute('class', 'pball_numbers btn btn-secondary rounded-circle m-1');
    //     node.appendChild(textnode);
    //     powerball_numbers.appendChild(node);
    // };

    // var random = Math.floor(Math.random() * (27));
    // var node = document.createElement("LI");
    // var textnode = document.createTextNode(random);
    // node.setAttribute('class', 'pball_numbers rounded-circle btn btn-success m-1');
    // node.appendChild(textnode);
    // powerball_numbers.appendChild(node);
});



megaMillions.addEventListener('click', () => {

    new_MegaMillions_game();

    for (i = 0; i < 5; i += 1) {
        var random = Math.floor(Math.random() * (71));
        var node = document.createElement("LI");
        var textnode = document.createTextNode(random);
        node.setAttribute('class', 'megaMillions_numbers btn btn-secondary rounded-circle m-1');
        node.appendChild(textnode);
        megaMillions_numbers.appendChild(node);
    };

    var random = Math.floor(Math.random() * (26));
    var node = document.createElement("LI");
    var textnode = document.createTextNode(random);
    node.setAttribute('class', 'megaMillions_numbers rounded-circle btn btn-success m-1');
    node.appendChild(textnode);
    megaMillions_numbers.appendChild(node);
});
