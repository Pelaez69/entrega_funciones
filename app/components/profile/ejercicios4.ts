let arreglo4 = ["aguacate", "arroz", "azucar"];
let arreglo5 = ["aguacate", "arroz", "azucar"];
function repetipalabra(arreglo4:string[], arreglo5:string[]) {
    const serepite = arreglo4.filter(element => arreglo5.includes(element));
    return serepite;
    
}

console.log(repetipalabra)