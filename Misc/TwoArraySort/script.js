function display() {
    aDisplay.innerHTML = "[" + a + "]";
    bDisplay.innerHTML = "[" + b + "]";
    tDisplay.innerHTML = "[" + temp + "]";
    rDisplay.innerHTML = "[" + result + "]";
}

function reset() {
    a = [2, 8, 3, 0, 6, 11];
    b = [9, 1, 5, 7, 4];
    temp = [];
    result = [];

    display();
}

function start() {
    
    var op = setInterval(() => {
        if (a.length != 0 && b.length != 0) {
            if (a[0] > b[0])
                result.push(a.shift());
            else
                result.push(b.shift()); 
            display();
        } else {
            clearInterval(op);
        }
    }, 3000);
}

document.addEventListener("DOMContentLoaded", function (event) {
    var a = [];
    var b = [];
    var temp = [];
    var result = [];

    aDisplay = document.querySelector(".a");
    bDisplay = document.querySelector(".b");
    tDisplay = document.querySelector(".temp");
    rDisplay = document.querySelector(".result");
    sbutton = document.querySelector(".start");
    rbutton = document.querySelector(".reset");

    sbutton.addEventListener("click", function (event) {
        event.stopPropagation();
        start();
    });
    rbutton.addEventListener("click", function(event) {
        event.stopPropagation();
        reset();
    });

});

