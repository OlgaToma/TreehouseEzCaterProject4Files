/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    };

    addPhraseToDisplay() {
        let phraseArray = this.phrase.split('');
        let phraseHtml = '';
        let className = '';

        phraseArray.forEach(element => {
            if(element === " ") {
                className = "space";
            } else {
                className = `hide letter ${element}`
            }
            phraseHtml += `<li class="${className}">${element}</li>\n`
        });
        $('#phrase').html(`<ul>${phraseHtml}</ul>`);
    };

    checkLetter(letter) {
        let foundLetter = false;
        if(this.phrase.indexOf(letter) >= 0) {
            foundLetter = true;
        }
        return foundLetter;
    };

    showMatchedLetter(letter) {
        $(`.hide.letter.${letter}`).each(function(){
          $(this).removeClass('hide');
          $(this).addClass('show');
        })
    };

 }

 
