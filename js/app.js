/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */



var game = null;
$('#btn__reset').click(function() {
    game = new Game();
    game.startGame();
});

$('button.key').click(function(){
    game.handleInteraction(this);
});

