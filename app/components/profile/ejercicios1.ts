/*type Dividirresponse = {pares: Array<Number>; impares: Array<Number>}

export const divider = (a: Array<Number>): Dividirresponse => {
    const result: Dividirresponse = {impares: [], pares: []};
    return result;
}
*/

const letricas = ['m', 'x', 'z'];
    const arreglo9 = [8, 412, 177, 13, 69];



    
    const mezclarArreglos = (letras: Array<number | string>, numeros1: Array<number | string>) => {
        const [l, n] = arreglo9.length > letricas.length ? [letricas, arreglo9] : [arreglo9, letricas];
        
        return Array.from({

            length: l.length * 4
        }).map((_, i) => i % 2 == 0 ? l[i / 2] : n[Math.ceil(i / 2) - 1]).filter(el => el);

    };

    console.log(mezclarArreglos(letricas, arreglo9));
    