let confirm1 = document.querySelector("#confirm")
let del = document.querySelector(".form");
let visible = document.querySelector(".submit");

let cardNumber = document.querySelector(".line1");
let cardName = document.querySelector(".line2");
let cardDate = document.querySelector(".line3");
let cardCode = document.querySelector(".line4");

let inputCardHolder = document.querySelector("#cardHolder");
let inputCardNumber = document.querySelector("#cardNumber");
let inputMM = document.querySelector("#mm");
let inputYY = document.querySelector("#yy");
let inputCVC = document.querySelector("#cvc");


function run(){ 
    if( inputCardHolder.value.length == 0 || 
       inputCardNumber.value.length == 0 || 
       inputMM.value.length == 0 || 
       inputYY.value.length == 0 || 
       inputCVC.value.length == 0){
        
        alert("[Erro] Preencha o campo vazio.");
    
    } else if ( inputCardHolder.value.length == 1){
        alert("Cardholder Name: Mínimo de 2 letras.")
    
    } else if( inputCardNumber.value.length < 19){
        alert("Card Number: Mínimo de 16 números.")
    
    } else if( inputMM.value.length < 2){
        alert("MM: Mínimo de 2 números.")
    
    } else if( inputYY.value.length < 2){
        alert("YY: Mínimo de 2 números.")
    
    } else if( inputCVC.value.length < 3){
        alert("CVC: Mínimo de 3 números.")
    
    } else {
        del.style.display = "none";
        visible.style.display = "flex";
        }
    }
    
function format (mask , document) {
      
    var i = document.value.length ;
    var exit = mask.substring (0,1);
    var text = mask.substring (i);
    if ( text.substring(0,1) !=exit){
        document.value += text.substring (0,1);
    }
}

function cardAtive1(){
    confirm1.addEventListener("click", run);
    inputCardHolder.addEventListener("input", cardHolderName);
    inputCardNumber.addEventListener("input", cardNumberCheck);
    inputMM.addEventListener("input", cardDateCheck);
    inputYY.addEventListener("input", cardDateCheck);
    inputCVC.addEventListener("input", cardCodeCheck);
}

function cardHolderName(){
    let NameCard = inputCardHolder.value
    cardName.innerHTML = NameCard;
}

function cardNumberCheck(){
    let NumberCard = inputCardNumber.value;
    cardNumber.innerHTML =  NumberCard;
}

function cardDateCheck(){
    let DateCard = inputMM.value + "/" + inputYY.value;
    cardDate.innerHTML = DateCard;
}

function cardCodeCheck(){ 
    let CodeCard = inputCVC.value;
    cardCode.innerHTML = CodeCard;
}

inputCardHolder.addEventListener("keypress",(a) =>{
    if(!checkCharName(a)){
        a.preventDefault();
    }
});	
function checkCharName(a){
    const char1 = String.fromCharCode(a.keyCode); 
    console.log(a.keyCode); 
    const pattern1 = "[a-zA-Z ]"
    if(char1.match(pattern1)){
        return true;
    }
}

inputCardNumber.addEventListener("keypress",(b) =>{
    if(!checkCharNumber(b)){
        b.preventDefault();
    }
});	
function checkCharNumber(b){
    const char2 = String.fromCharCode(b.keyCode);   
    const pattern2 = "[0-9]";
    if(char2.match(pattern2)){
        return true;
    }
}

inputMM.addEventListener("keypress",(c) =>{
    if(!checkCharMM(c)){	
        c.preventDefault();
    }
});
function checkCharMM(c){
    const char3 = String.fromCharCode(c.keyCode);   
    const pattern3 = "[0-9]";
    if(char3.match(pattern3)){
        return true;
    }
}

inputYY.addEventListener("keypress",(d) =>{
    if(!checkCharYY(d)){
        d.preventDefault();
    }
});
function checkCharYY(d){
    const char4 = String.fromCharCode(d.keyCode);   
    const pattern4 = "[0-9]";
    if(char4.match(pattern4)){
        return true;
    }
}

inputCVC.addEventListener("keypress", (e) =>{
    if(!checkCharCVC(e)){
        e.preventDefault();
    }
});
function checkCharCVC(e){
    const char5 = String.fromCharCode(e.keyCode);   
    const pattern5 = "[0-9]";
    if(char5.match(pattern5)){
        return true;
    }
}
cardAtive1();
