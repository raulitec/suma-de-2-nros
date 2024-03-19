    
function sumarNro(){ 
    let n1=parseFloat(document.getElementById("nro1").value);
    let n2=parseFloat(document.getElementById("nro2").value);  
    let res=n1+n2;
    document.getElementById("rpta").value=res;
}
function restarNro(){ 
    let n1=parseFloat(document.getElementById("nro1").value);
    let n2=parseFloat(document.getElementById("nro2").value);  
    let res=n1-n2;
    document.getElementById("rpta").value=res;
}
function multiplicarNro(){ 
    let n1=parseFloat(document.getElementById("nro1").value);
    let n2=parseFloat(document.getElementById("nro2").value);  
    let res=n1*n2;
    document.getElementById("rpta").value=res;
}
function dividirNro(){ 
    let n1=parseFloat(document.getElementById("nro1").value);
    let n2=parseFloat(document.getElementById("nro2").value);  
    let res=n1/n2;
    if(n2===0){
        document.getElementById("rpta").value="indeterminado";

    }else{
        document.getElementById("rpta").value=res;

    }
    
}
function limpiar(){
    document.getElementById("form").reset();
    //tambien de esta manera
    
   /* document.getElementById("nro1").value=0;
    document.getElementById("nro2").value=0;
    document.getElementById("rpta").value=0;*/

    

    
}