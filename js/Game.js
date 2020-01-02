/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.activePhrase = null; 
        this.phrases = [
            {phrase: "Practice what you preach"}, 
            {phrase: "Here today gone tomorrow"},
            {phrase: "Variety is the spice of life"},
            {phrase: "Better safe than sorry"},
            {phrase: "There are plenty of fish in the sea"}
        ];
    };

    getRandomPhrase() {
        let randomPhraseIndex = [Math.floor(Math.random() * 5)];
        return new Phrase(this.phrases[randomPhraseIndex].phrase);
    };

    startGame() {
        $('#overlay').hide();
        $("overlay").removeClass("win");
        $("overlay").removeClass("lose");
        let phrase = this.getRandomPhrase();
        phrase.addPhraseToDisplay();
        this.activePhrase = phrase;
    };

    checkForWin() {
        let win = false;
        if($(`.hide.letter`).length === 0) {
            win = true;
        }
        return win;
    };

    removeLife() {
        this.missed ++

        let lives = $('li.tries');
        for(let i=0; i<this.missed; i++){
            let heart = $(lives[i]).children().first();
            heart.attr("src","images/lostHeart.png");
        }
        
        if(this.missed === 5) {
            this.gameOver();
        }
    };

    gameOver() {
        $('#overlay').show();
        if(this.checkForWin()) {
            $('#game-over-message').text("You won! :-)");
            $("#overlay").addClass("win");
        } else {
            $('#game-over-message').text("You lost! :-(");
            $("#overlay").addClass("lose");
        }

        $('#phrase ul').empty();
        $('button.key').each(function(){
            $(this).removeClass('wrong');
            $(this).removeClass('chosen');
            $(this).prop('disabled',false);
        })

        let lives = $('li.tries');
        lives.each(function(){
            let heart = $(this).children().first();
            heart.attr("src","images/liveHeart.png");
        })
    };

    handleInteraction(buttonEl){
        
        let button = $(buttonEl);
        let letter = button.text();
        
        button.prop('disabled',true);

        if(this.activePhrase.checkLetter(letter)){
            button.addClass('chosen');
            this.activePhrase.showMatchedLetter(letter);
            if(this.checkForWin()){
                this.gameOver();
            }
        } else {
            button.addClass('wrong')
            this.removeLife();
        }
    };
      
}
