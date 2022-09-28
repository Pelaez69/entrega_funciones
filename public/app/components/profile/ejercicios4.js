let arreglo4 = ["aguacate", "arroz", "azucar"];
let arreglo5 = ["aguacate", "arroz", "azucar"];
function repetipalabra(arreglo4, arreglo5) {
    const serepite = arreglo4.filter(element => arreglo5.includes(element));
    return serepite;
}
console.log(repetipalabra);
