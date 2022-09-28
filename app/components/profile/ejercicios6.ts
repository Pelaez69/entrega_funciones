var arreglo6: any [] = ["v", 2, "a", 3, "u", 1];
 
function searregla(array:Array<any>) {
    let arreglo7 = array;
    var arregloorganizado:any[] = [];

    array = array.filter(number => Number.isInteger(number));
    arreglo7 = arreglo7.filter(String => !Number.isInteger(String));

    array.sort();
    arreglo7.sort();
    arreglo7.forEach(element => {
        arregloorganizado.push(element);
    });
    array.forEach(element => {
        arregloorganizado.push(element);
    });

        return arregloorganizado
}

console.log(searregla)