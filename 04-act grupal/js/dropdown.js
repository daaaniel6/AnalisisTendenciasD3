function showDiv(select){

    if(select.value== "linea"){
     document.getElementById('linea_div').style.display = "block";
     document.getElementById('barra_div').style.display = "none";
    } 
    if(select.value== "barra")
    {
        document.getElementById('barra_div').style.display = "block";
        document.getElementById('linea_div').style.display = "none";
    }
 } 