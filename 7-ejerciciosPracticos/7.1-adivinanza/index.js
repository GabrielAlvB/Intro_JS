// Obtener elementos HTML despues que se carga el DOM
document.addEventListener("DOMContentLoaded",
function(){
    let guessInput=document.getElementById("guess");
    let submitButton= document.getElementById("submitBoton");
    let feedbackText=document.getElementById("feedback");
    let resetButton= document.getElementById("resetBoton");
    
    //GENERAR NUMERO ALEATORIO ENTRE EL 1 Y 100
    let numberToGuess=generateNumberToGuess();

    //DEFINIR LA FUNCION QUE COMPARA LA RESPUESTA CON NUMBER
    function checkGuess(){
        let userGuess=Number(guessInput.value);

        if(userGuess === numberToGuess){
            feedbackText.textContent="acertaste";
            submitButton.disabled=true;
            resetButton.style.display="block";
        }else if(userGuess>numberToGuess){
            feedbackText.textContent="Es menor";
        }else{
            feedbackText.textContent="Es mayor";
        }
            
            //feedbackText.textContent="fallaste el numero era: "+numberToGuess;   
        
    }

        function resetGame(){
            numberToGuess=generateNumberToGuess();
            guessInput.value="";
            feedbackText.textContent="";
            submitButton.disabled=false;
            resetButton.style.display="none";
        }

        function generateNumberToGuess(){
            return Math.floor(Math.random()*99)+1;
        }

            //agregar un evento al evento adivinar
            submitButton.addEventListener("click",checkGuess);
     
            //agregar un evento al boton reiniciar
            resetButton.addEventListener("click",resetGame);

});



