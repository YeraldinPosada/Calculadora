function calcularResultado(opcion){
    let valor1 = parseFloat(document.getElementById("num1").value);  
    let valor2 = parseFloat(document.getElementById("num2").value);
    opcion = parseInt(opcion);

    if(opcion==1){
        alert(valor1 + " + " + valor2 + " = " + (valor1 + valor2));    
    }
    else if(opcion==2){
        alert(valor1 + " - " + valor2 + " = " + (valor1 - valor2));
    }
    else if(opcion==3){
        alert(valor1 + " * " + valor2 + " = " + (valor1 * valor2));
    }
    else if(opcion==4){
        if(valor2==0){
            alert("El número a dividir debe ser diferente de 0")
        }
        else{
        alert(valor1 + " / " + valor2 + " = " + (valor1 / valor2));
        }
    }
    else if(opcion==5){
        alert(valor1 + " ^ " + valor2 + " = " + (valor1 ** valor2));
    }

}