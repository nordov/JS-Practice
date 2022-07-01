class Calculator {
    constructor() {
        this.state = "0";
        this.operation = [];
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
        this.difference = this.difference.bind(this);
        this.multiplication = this.multiplication.bind(this);
        this.division = this.division.bind(this);

        this.addListeners();
        this.display("0");
    }

    getState() {
        return this.state;
    }

    reset() {
        this.state = "0";
        this.operation = [];
        this.clearLegends();
        this.display(this.state != "" ? this.state : '0');
    }

    updateState(value) {
        
        this.state = value;
        this.display(this.state);
    }

    updateOperation(op) {

        this.operation.push(this.state).push(op);
        console.log(this.operation);

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
        this.addKey.addEventListener('click', this.addition);
        this.diffKey.addEventListener('click', this.difference);
        this.mpyKey.addEventListener('click', this.multiplication);
        this.divKey.addEventListener('click', this.division);
    }

    writeNumber(e) {
        e.preventDefault();
        if (this.state.length < 8)
        this.updateState(
            this.state != "0" ?
                e.target.value :
                this.state + e.target.value
        );
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
        this.updateOpStack('+');
        this.clearLegends();
        document.querySelector(".icon.add").setAttribute("style", "display:block");
    }

    difference(e) {
        e.preventDefault();
        this.clearLegends();
        document.querySelector(".icon.diff").setAttribute("style", "display:block");
    }

    multiplication(e) {
        e.preventDefault();
        this.clearLegends();
        document.querySelector(".icon.mpy").setAttribute("style", "display:block");
    }

    division(e) {
        e.preventDefault();
        this.clearLegends();
        document.querySelector(".icon.div").setAttribute("style", "display:block");
    }

}

document.addEventListener("DOMContentLoaded", () => {
    let calc = new Calculator();
    window.myCalc = calc;
    window.myOP = calc.opstack;
    console.log("Calculator started");
});

