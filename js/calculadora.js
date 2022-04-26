/* variables de botones numeros */ 
var btnCero = document.getElementById("btnCero");
var btnUno = document.getElementById("btnUno");
var btnDos = document.getElementById("btnDos");
var btnTres = document.getElementById("btnTres");
var btnCuatro = document.getElementById("btnCuatro");
var btnCinco = document.getElementById("btnCinco");
var btnSeis = document.getElementById("btnSeis");
var btnSiete = document.getElementById("btnSiete");
var btnOcho = document.getElementById("btnOcho");
var btnNueve = document.getElementById("btnNueve");
var btnComa = document.getElementById("btnComa");

/* variables de botones operaciones */
var btnSuma = document.getElementById("btnSuma");
var btnResta = document.getElementById("btnResta");
var btnMulti = document.getElementById("btnMulti");
var btnDiv = document.getElementById("btnDiv");
var btnIgual = document.getElementById("btnIgual");
var btnReset = document.getElementById("btnReset");
var btnCambioSigno = document.getElementById("btnCambioSigno");
var btnPorciento = document.getElementById("btnPorciento");
var btnRaizCuadrada = document.getElementById("btnRaizCuadrada");
var btnElevado2 = document.getElementById("btnElevado2");
var btnElevadoY = document.getElementById("btnElevadoY");
var btn10ElevX = document.getElementById("btn10ElevX");
var btnSin = document.getElementById("btnSin");
var btnSinH = document.getElementById("btnSinH");
var btnCos = document.getElementById("btnCos");
var btnCosH = document.getElementById("btnCosH");
var btnTan = document.getElementById("btnTan");
var btnTanH = document.getElementById("btnTanH");
var btnyVx = document.getElementById("btnyVx");
var btnE = document.getElementById("btnE");
var btnLog = document.getElementById("btnLog");
var btnLog10 = document.getElementById("btnLog10");
var btnPi = document.getElementById("btnPi");


/* Display */
var display = document.getElementById("resultado");
/* Variable para el boton modo  calculadora cientifica */
var btnCientifica = document.getElementById("btnCientifica");
/* Variable para sacar la propiedad css visibility->hidden/visible */
var divCientifica = document.getElementById("cientifica");

class Calculadora {
    constructor() {
        this.operacionPulsada = false;
        this.total = 0;
        this.signo = "";
        display.value = "0";
        divCientifica.style.visibility = "hidden";
    }
    /* Funcion que recoge el boton-Numero pulsado */
    fNumero (numero){
    //Borra display si antes hemos pulsado una operacion
        if (this.operacionPulsada) { 
            display.value = numero;
            this.operacionPulsada = false; //controla "apaga la ultima operacion"

        }else{ //si no hay pulsada una operacion...
            if (display.value === "0" && numero === ".") //Para admitir valores de (0.0 a 0.9)
                display.value += numero;
            else if(display.value === "0")//si display es igual a cero asigna directamente el valor
                display.value = numero;
            else if(display.value === "0."){
                if (numero === ".");
                else  display.value += numero;}
            else  
                display.value += numero; //si display es distinto de 0 (ya hay un numero) 
        }   
    };
    /* Funcion que realiza la operacion */
    fOperacion = (operacion) => {
     console.log("entra en la funcion de la eleccion de la operacion") 
        switch (operacion) {
            case "+":
                if (this.operacionPulsada !== true){ // Controlamos que no podemos concatenar operaciones
                    this.fSuma();
                    this.signo = "+"; //Asigna valor para recordar en "=" la ultima operacion pulsada
                } 
                break;
            case "-":
                if (this.operacionPulsada !== true){ // Controlamos que no podemos concatenar operaciones
                    this.fResta();
                    this.signo = "-"; //Asigna valor para recordar en "=" la ultima operacion pulsada
                }    
                break;
            case "*":
                if (this.operacionPulsada !== true){ // Controlamos que no podemos concatenar operaciones
                    this.fMultiplicacion();
                    this.signo = "*"; //Asigna valor para recordar en "=" la ultima operacion pulsada
                }    
                break;
            case "/":
                if (this.operacionPulsada !== true){ // Controlamos que no podemos concatenar operaciones
                    this.fDivision();
                    this.signo = "/"; //Asigna valor para recordar en "=" la ultima operacion pulsada
                }    
                break;
            case "+/-": //Cambia de signo al valor del display
                display.value *= -1;     
                break;
            case "%":
                if (this.operacionPulsada !== true) // Controlamos que no podemos concatenar operaciones
                    this.fPorcentaje();
                this.total = 0;
                break;   
            case "x^2":
                if (this.operacionPulsada !== true) // Controlamos que no podemos concatenar operaciones
                    display.value = Math.pow(display.value,2);
                this.total = 0;
                break;
            case "x^y":
                if (this.operacionPulsada !== true) // Controlamos que no podemos concatenar operaciones
                    if (this.total === 0) this.total = display.value;
                    else display.value = Math.pow(this.total, display.value);    
                this.operacionPulsada = true;
                this.signo = "x^y";
                break;
            case "2√x":
                if (this.operacionPulsada !== true) // Controlamos que no podemos concatenar operaciones
                    display.value = Math.sqrt(display.value);
                this.total = 0;
                break;
            case "yVx":
                if (this.operacionPulsada !== true){ // Controlamos que no podemos concatenar operaciones
                    if (this.total === 0) this.total = display.value;
                    else  display.value = Math.pow(this.total, 1 / display.value);
                }
                this.operacionPulsada = true;
                this.signo = "x^y";
                break;    
            case "10^x": Math.lo
                break;
            case "Pi":
                this.total = Math.PI;
                display.value = Math.PI;
                break;    
            case "sin":
                display.value = Math.sin(display.value);
                break;
            case "sinh":
                display.value = Math.sinh(display.value);
                break;
            case "cos":
                display.value = Math.cos(display.value);
                break;
            case "cosh":
                display.value = Math.cosh(display.value);
                break;    
            case "tan":
                display.value = Math.tan(display.value);    
                break;
            case "tanh":
                display.value = Math.tanh(display.value);    
                break;    
            case "log":
                display.value = Math.log(display.value); 
                break;
            case "log10":
                display.value = Math.log10(display.value); 
                break;    
            case "e":
                this.total = Math.E;
                display.value = Math.E;                       
            case "=":
                this.fOperacion(this.signo); //Se llama asi misma con el ultimo signo asignado y alli muestra el resultado
                this.total = 0;
                break;
            case "C":
                this.total = 0;
                display.value = this.total;
        }  
    };
    /* Funciones de operaciones */
    fSuma = () => {
        console.log("entra en la funcion suma");
        let valorDisplay = parseFloat(display.value);
        this.total = valorDisplay + this.total; 
        this.operacionPulsada = true; //controla reseteo de display
        display.value = this.total;
    };
    fResta = () => {
        console.log("entra en la funcion resta");
        let valorDisplay = parseFloat(display.value);
        if(this.total === 0 )
            this.total = valorDisplay ;
        else 
            this.total = this.total - valorDisplay;    
        this.operacionPulsada = true; //controla reseteo de display
        display.value = this.total;
    };
    fMultiplicacion = () => {
        let valorDisplay = parseFloat(display.value);
        this.total = (this.total === 0)? valorDisplay * 1 : valorDisplay * this.total;
        this.operacionPulsada = true; //controla reseteo de display
        display.value = this.total;
    };
    fDivision = () => {
        let valorDisplay = parseFloat(display.value);
        this.total = (this.total === 0)? valorDisplay : this.total / valorDisplay;
        this.operacionPulsada = true; //controla reseteo de display
        display.value = this.total;
    };
    fPorcentaje = () => {
        if((this.total === 0) && (display.value !== 0)) 
            display.value = display.value / 100;
        else {
            this.fMultiplicacion(); //Aplica primero multiplicacion para despues dividir su resultado entre 100
            display.value /= 100;
        }
    };
    /* Funcion que se encarga de ocultar-activar la parte cientifica  */
    fVisible = () => {
        if (divCientifica.style.visibility === "hidden")
            divCientifica.style.visibility = "visible";
        else
            divCientifica.style.visibility = "hidden";  
    };
}
/* Objeto Calculadora */
var calcu = new Calculadora();
/* Eventos de botones */
btnCero.addEventListener("click", function(){calcu.fNumero(btnCero.value)} )
btnUno.addEventListener("click", function(){calcu.fNumero(btnUno.value)}); 
btnDos.addEventListener("click", function(){calcu.fNumero(btnDos.value)});
btnTres.addEventListener("click", function(){calcu.fNumero(btnTres.value)});
btnCuatro.addEventListener("click", function(){calcu.fNumero(btnCuatro.value)});
btnCinco.addEventListener("click", function(){calcu.fNumero(btnCinco.value)});
btnSeis.addEventListener("click", function(){calcu.fNumero(btnSeis.value)});
btnSiete.addEventListener("click", function(){calcu.fNumero(btnSiete.value)});
btnOcho.addEventListener("click", function(){calcu.fNumero(btnOcho.value)});
btnNueve.addEventListener("click", function(){calcu.fNumero(btnNueve.value)});
btnComa.addEventListener("click", function(){calcu.fNumero(btnComa.value)});

/* Evento display */
display.addEventListener("click", function(){calcu.fNumero(display.value)});
/* Evento que habilita-desactiva la calculadora cientifica */
btnCientifica.addEventListener("click", function(){calcu.fVisible()})

/* Eventos operaciones */
btnSuma.addEventListener("click", function(){calcu.fOperacion(btnSuma.value)});
btnResta.addEventListener("click", function(){calcu.fOperacion(btnResta.value)});
btnMulti.addEventListener("click", function(){calcu.fOperacion(btnMulti.value)});
btnDiv.addEventListener("click", function(){calcu.fOperacion(btnDiv.value)});
btnIgual.addEventListener("click", function(){calcu.fOperacion(btnIgual.value)});
btnReset.addEventListener("click", function(){calcu.fOperacion(btnReset.value)});
btnCambioSigno.addEventListener("click",function(){calcu.fOperacion(btnCambioSigno.value)});
btnPorciento.addEventListener("click", function(){calcu.fOperacion(btnPorciento.value)});
btnElevado2.addEventListener("click", function(){calcu.fOperacion(btnElevado2.value)});
btnElevadoY.addEventListener("click", function(){calcu.fOperacion(btnElevadoY.value)});
btnRaizCuadrada.addEventListener("click", function(){calcu.fOperacion(btnRaizCuadrada.value)});
btn10ElevX.addEventListener("click", function(){calcu.fOperacion(btn10ElevX.value)});
btnSin.addEventListener("click", function(){calcu.fOperacion(btnSin.value)});
btnSinH.addEventListener("click", function(){calcu.fOperacion(btnSinH.value)});
btnCos.addEventListener("click", function(){calcu.fOperacion(btnCos.value)});
btnCosH.addEventListener("click", function(){calcu.fOperacion(btnCosH.value)});
btnTan.addEventListener("click", function(){calcu.fOperacion(btnTan.value)});
btnTanH.addEventListener("click", function(){calcu.fOperacion(btnTanH.value)});
btnLog.addEventListener("click", function(){calcu.fOperacion(btnLog.value)});
btnLog10.addEventListener("click", function(){calcu.fOperacion(btnLog10.value)});
btnE.addEventListener("click", function(){calcu.fOperacion(btnE.value)});
btnPi.addEventListener("click", function(){calcu.fOperacion(btnPi.value)});
btnyVx.addEventListener("click", function(){calcu.fOperacion(btnyVx.value)});
