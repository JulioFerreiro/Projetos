//Treinando Fectory function (Função fábrica)

function criaCalculadora() {
    return {
        display: document.querySelector(`.display`),
        
        inicia: function() {
            this.cliqueBotoes();
            this.pressionaEnter();
        }, 

        pressionaEnter() {
            this.display.addEventListener(`keyup`, (e) => {
                if(e.keyCode === 13){
                    this.realizaConta();
                }
            });
        },

        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta);

                if(!conta){
                    alert(`Conta inválida.`);
                }
                this.display.value = String(conta);
            } catch(e) {
                alert(`Conta inválida.`);
                return;
            }

        },
        
        clearDisplay() {
            this.display.value = ``;
        },

        delOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        

        cliqueBotoes(){
            //this -> calculadora
            document.addEventListener(`click`, (e) => {
                const el = e.target;

                if(el.classList.contains(`btn-num`)) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains(`btn-clear`)) {
                    this.clearDisplay(el.innerText);
                }
                if(el.classList.contains(`btn-del`)){
                    this.delOne(el.innerText);
                }
                if(el.classList.contains(`btn-eq`)) {
                    this.realizaConta(el.innerText);
                }
            });
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        },


    };
}

const calculadora = criaCalculadora();
calculadora.inicia();









// function criaCalculadora() {
//     return {
//         display: document.querySelector(`.display`),
        
        
        
//         inicia: function() {
//             this.cliqueBotoes()
//         }, 

//         cliqueBotoes(){
//             //this -> calculadora
//             document.addEventListener(`click`, function(e) {
//                 const el = e.target;

//                 if(el.classList.contains(`btn-num`)) {
//                     this.btnParaDisplay(el.innerText);
//                 }
//             }.bind(this));
//         },

//         btnParaDisplay(valor) {
//             this.display.value += valor;
//         },


//     };
// }
