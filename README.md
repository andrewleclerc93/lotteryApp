<!-- Heading -->
# Random Lottery Number Generator

<!-- Description -->
This is a simple app that generates random lottery numbers for some of the more popular lottery games.

<!-- Installation and Access -->
## Getting Started
1. The Random Lottery Number Generator can be accessed directly from [here](https://www.technology-unbound.com/lottery_app/).
2. The LotteryApp Github repository can be cloned to be run a local machine. After cloning, simply open the index.html file in a web browser to open the app.

'''
$ git clone https://github.com/andrewleclerc93/lotteryApp.git
'''

---
<!-- Code Descriptions -->
## Description of Code

<!-- JavaScript -->
### JavaScript
There following objects are used to build the lottery games currently available:

'''javascript
var pBallGame = {    
    balls: 5,    // total number of balls, minus any powerballs
    min: 1,    // starting number of ball range
    max: 69,    // ending number of ball range
    class: 'pball_numbers btn btn-secondary rounded-circle m-1',    // css styling classes for balls
    pBallClass: 'pball_numbers btn btn-danger rounded-circle m-1',    // css styling classes for powerballs
    style: 'width: 43.25px; height: 38px',    // css styles for ball sizing
    element: powerball_numbers,    // pointer to the DOM where numbers will be generated
    clearBtn: clear_powerball    // pointer to 'clear' button for this game
};
'''

'''javascript
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
'''



