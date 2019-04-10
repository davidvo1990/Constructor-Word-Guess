// * **Letter.js**: Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//   * A string value to store the underlying character for the letter

//   * A boolean value that stores whether that letter has been guessed yet

//   * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed

//   * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

var Letter = function (currentWord) {
    // this.usedletter = [];
    //   * A string value to store the underlying character for the letter
    this.underlying = underlying;
    // var wordJoin = "";
    // this.wordJoin = wordJoin;

    // this.underlying = function () {
    //     var showarray = [];

    //     showarray.length = currentWord.length;
    //     for (var i = 0; i < showarray.length; i++) {
    //         showarray[i] = "_";
    //         if (currentWord.charAt(i) === " ") {
    //             showarray[i] = " ";
    //             currentWord.length--;
    //         }
    //     }
    //     wordJoin = showarray.join(" ");
    //     return wordJoin;
    // };

    //   * A boolean value that stores whether that letter has been guessed yet
    // need to check against usedletter not currentWord
    // this.hadguess = function (x) {
    //     return currentWord.includes(x);
    // };

    //   * A function that returns the underlying character if the letter has been guessed, 
    // or a placeholder (like an underscore) if the letter has not been guessed
    


    //   * A function that takes a character as an argument and checks it against the underlying character, 
    // updating the stored boolean value to true if it was guessed correctly


};

var word = new Letter("Hello");
console.log(word.underlying());
console.log(word.hadguess("k"))