

class Elements {

    constructor(){
        this.checkButton = document.querySelector(".check-btn");
        this.elementsList = {
                                "Ac" : "Actinio",
                                "Al" : "Aluminio",
                                "As" : "Arsenico",
                                "Ag" : "Plata",
                                "Ar" : "Argon",
                                "At" : "Astato",
                                "Au" : "Oro",
                                "B" : "Boro",
                                "Ba" : "bario",
                                "Be" : "Berilio",
                                "Bi" : "Bismuto",
                                "Br" : "Bromo",
                                "C" : "Carbono",
                                "Ca" : "Calcio",
                                "Cd" : "Cadmio",
                                "Ce" : "Cerio",
                                "Co" : "Cobalto",
                                "Cr" : "Cromo",
                                "Cs" : "Cesio",
                                "Cu" : "Cobre",
                                "F" : "Fluor",
                                "Fe" : "Hierro",
                                "Fr" : "Francio",
                                "Ga" : "Galio",
                                "Ge" : "Germanio",
                                "H" : "Hidrogeno",
                                "Sc" : "Escandio",
                                "SE" : "Selenio",
                                "Si" : "Silicio",
                                "He" : "Helio",
                                "Hg" : "Mercurio",
                                "I" : "Yodo",
                                "K" : "Potasio",
                                "Kr" : "kripton",
                                "Li" : "Litio",
                                "La" : "Lantano",
                                "Mg" : "Magnesio",
                                "Mn" : "Manganeso",
                                "N" : "Nitrogeno",
                                "Na" : "Sodio",
                                "Nd" : "Neodimio",
                                "Ne" : "Neon",
                                "Ni" : "Niquel",
                                "O" : "Oxigeno",
                                "P" : "Fosforo",
                                "Pb" : "Plomo",
                                "Pd" : "Paladio",
                                "Po" : "Polonio",
                                "Pt" : "Platino",
                                "Pu" : "Plutonio",
                                "Ra" : "Radio",
                                "Rb" : "Rubidio",
                                "Rn" : "Radon",
                                "Ru" : "Rutenio",
                                "S" : "Azufre",
                                "Sb" : "Antimonio",
                                "Sn" : "Estaño",
                                "Sr" : "Estrancio",
                                "Tl" : "Talio",
                                "Ti" : "Titanio",
                                "Te" : "Telurio",
                                "U" : "Uranio",
                                "V" : "Vanadio",
                                "Xe" : "Xenon",
                                "Zn" : "Zinc",
                            }
    }

    check() {
        const checkType = document.querySelector(".quiz-type").value;
        const inputList = document.querySelectorAll(".element-item");

        console.log(checkType);

        if (checkType == "symbols") {
            inputList.forEach(item => {
                const sym = item.getAttribute("data-sym");
                const name = item.getAttribute("data-name").toLowerCase();
                const answer = item.value.toLowerCase();

                if ( name == answer ) {
                    item.classList.add("is-valid");
                } else {
                    item.classList.add("is-invalid");
                }

                console.log(sym);
                console.log(name);
            });
        } else {
            inputList.forEach(item => {
                const name = item.getAttribute("data-name").toLowerCase();
                const sym = item.getAttribute("data-sym").toLowerCase();
                const answer = item.value.toLowerCase();

                if ( sym == answer ) {
                    item.classList.add("is-valid");
                } else {
                    item.classList.add("is-invalid");
                }

                console.log(sym);
                console.log(name);
            });
        }
        

    }

    display(button, elementsList) {

        const action = button.getAttribute("data-name");
        let appContainer = document.querySelector(".app-container");

        appContainer.innerHTML = `
            <input class="quiz-type" 
                   type="hidden"
                   value="${action}" >
        `;
        
        for (const element in this.elementsList){
            let elementInput = `
                <div class="input-group input-group-lg mb-3">
                    <span class="input-group-text" id="inputGroup-sizing-lg">
                        ${action == "list" || action == "symbols" ? element : elementsList[element]}
                    </span>
                    <input type="text" 
                           class="form-control element-item" 
                           aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"
                           data-sym="${element}"
                           data-name="${elementsList[element]}"
                           ${action == "list" ? 'value="'+ elementsList[element] + '"' : ''}
                           ${action == "list" ? "disabled" : ""}
                    >
                </div>
            `;
            appContainer.innerHTML += elementInput;
        }

        action != "list" ? this.checkButton.style.visibility = "visible" :
                           this.checkButton.style.visibility = "hidden";
    }

    
    startApp() {
        let buttons = document.querySelectorAll(".list-btn");
        // console.log(buttons);
        this.checkButton.addEventListener('click', () => {
            this.check(this.elementsList);
        });
        const elementsList = this.elementsList;

        buttons.forEach(button => {
            // console.log(button);
            let action = button.getAttribute("data-name");
            // console.log(action);
            button.addEventListener('click', () => {
                this.display(button, elementsList);
            });
        });
    }
}

window.addEventListener('load', function () {
    console.log('All assets are loaded')
    eApp = new Elements();
    eApp.startApp();


})