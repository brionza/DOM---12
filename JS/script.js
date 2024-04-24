function getSeed(){
    let seed = parseInt(document.getElementById("seed").value);
    
    if(seed > 1 && seed < 10000){
        doStuff(seed);
    }
}

function doStuff(seed){
    let length = 1;
    let comparison = 0;

    while(seed !== 1){
        if(seed % 2 == 0){ seed = seed / 2; }
        else if(seed % 2 != 0){ seed = (seed * 3) + 1; }
        length++;

        if(seed > comparison){ comparison = seed; }
    }
    
    alert("La longitud fue de: " + length);
    alert("El más grande fue: " + comparison);
}