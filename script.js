function change() {
    var quotes = {
        "Thomas A. Edison": ' "Many of life failures are people who did not realize how close they were to success when they gave up" ',
        " Mae West": ' "You only live once, but if you do it right, once is enough" ',
        " Stephen King": ' "Get busy living or get busy dying" ',
        " John Lennon": ' "Life is what happens when you are busy making other plans." ',
        "Dalai Lama" :  ' "The purpose of our lives is to be happy" '
    }
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random() * authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("name").innerHTML = author;
}



