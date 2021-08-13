
function calcular(){

    let altura = parseFloat(document.getElementById("altura").value);
    let peso = document.getElementById("peso").value;
    let resultado = document.getElementById("resultado");
    let peso_Ideal = document.getElementById("pesoIdeal");
    let cor_class = document.getElementById("cor_class");

    if(altura == 0 || altura < 1.20){
        alert("Insira sua altura ou peso para prosseguir! ");
        
    }if (peso == 0 || peso < 35) {
        alert("Insira sua altura ou peso para prosseguir! ")
           
    } else {
        document.getElementById("telaInicial").style.display = "none";
        document.getElementById("telaResultado").style.display = "flex";    
    }

    // CALCULO PESO 
    resultado_IMC = (peso / (altura * altura));
    resultado.innerHTML = (resultado_IMC.toFixed(1));


    // CLASSIFICAÇÃO    
    if(resultado_IMC < 18.5){
        peso_Ideal.innerHTML = "Abaixo do peso";
        cor_class.style.backgroundColor = "#64C9CF"
        
    }else if( resultado_IMC <= 24.9){
        peso_Ideal.innerHTML = "Saudável";
        cor_class.style.backgroundColor = "#4AA96C"

    }else if( resultado_IMC  <= 29.9){
        peso_Ideal.innerHTML = "Peso em Excesso";
        cor_class.style.backgroundColor = "#FFB740"
        
    }else if( resultado_IMC  <= 34.9){
        peso_Ideal.innerHTML = "Obesidade Grau I";
        cor_class.style.backgroundColor = "#DF711B"
    
    }else if( resultado_IMC  <= 39.9){
        peso_Ideal.innerHTML = "Obesidade Grau II";
        cor_class.style.backgroundColor = "#DA0037"

    }else if( resultado_IMC > 40.0){
        peso_Ideal.innerHTML = "Obesidade Grau III";
        cor_class.style.backgroundColor = "#BD1616"
    }

}



function reset(){
    document.getElementById("telaInicial").style.display = "flex";
    document.getElementById("telaResultado").style.display = "none";
}