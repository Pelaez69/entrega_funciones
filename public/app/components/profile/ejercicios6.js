var arreglo6 = ["v", 2, "a", 3, "u", 1];
function searregla(array) {
    let arreglo7 = array;
    var arregloorganizado = [];
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
    return arregloorganizado;
}
console.log(searregla);
