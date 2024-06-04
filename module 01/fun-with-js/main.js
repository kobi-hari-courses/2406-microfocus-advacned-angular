
var s = "hello world";

String.prototype.toUpperCase = function() {
    return "bla bla bla " + this;
}

function theNewSetTimeout(theOldSetTimeout, callback, time) {
    console.log('I am the new setTimeout');
    const newCallback = () => {
        callback();
        console.log('I am the new callback');

    }

    theOldSetTimeout(newCallback, time);
}

var tmpTimeout = setTimeout;
setTimeout = (callback, time) => theNewSetTimeout(tmpTimeout, callback, time);

console.log(s.toUpperCase());


setTimeout(() => {
    console.log('hello later');
}, 5000);


