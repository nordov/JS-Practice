class Calculator {
    constructor() {
        this.state = "";
        this.screen = document.querySelector(".screen");
        this.clear = document.querySelector(".AC");
        this.neg = document.querySelector(".neg");
        this.addKey = document.querySelector(".key.add");
        this.diffKey = document.querySelector(".key.diff");
        this.mpyKey = document.querySelector(".key.mpy");
        this.divKey = document.querySelector(".key.div");
        this.numKeys = document.querySelectorAll(".num");
        this.legends = document.querySelectorAll(".icon");

        this.reset = this.reset.bind(this);
        this.updateState = this.updateState.bind(this);
        this.display = this.display.bind(this);
        this.writeNumber = this.writeNumber.bind(this);
        this.negative = this.negative.bind(this);
        this.addition = this.addition.bind(this);

        this.addListeners();
        this.display("0");
    }

    reset() {
        this.state = "";
        this.clearLegends();
        this.display(this.state != "" ? this.state : '0');
    }

    updateState(value) {
        this.state = value;
        this.display(this.state);
    }

    display(value) {
        this.screen.setAttribute("value", value);
    }

    addListeners() {
        this.clear.addEventListener('click', this.reset);
        this.neg.addEventListener('click', this.negative);
        this.numKeys.forEach( numKey => {
            numKey.addEventListener('click', this.writeNumber);
        });
        console.log(this.addKey);
        this.addKey.addEventListener('click', this.addition);
    }

    writeNumber(e) {
        e.preventDefault();
        if (this.state.length < 8)
        this.updateState(this.state + e.target.value);
    }

    negative(e) {
        e.preventDefault();
        this.updateState((this.state * -1).toString());
    }

    clearLegends(){
        this.legends.forEach(legend => {
            legend.removeAttribute("style");
        });
    }

    addition(e) {
        e.preventDefault();
        console.log(this.legends);

    }

}

document.addEventListener("DOMContentLoaded", () => {
    let calc = new Calculator();
    window.myState = calc.state;
    console.log("Calculator started");
});

