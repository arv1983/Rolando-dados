let dado1, dado2;
let resultado = [
    ['2', 0],
    ['3', 0],
    ['4', 0],
    ['5', 0],
    ['6', 0],
    ['7', 0],
    ['8', 0],
    ['9', 0],
    ['10', 0],
    ['11', 0],
    ['12', 0],
];

for (let i = 1; i <= 1000; i++) {
    dado1 = Math.floor(Math.random() * 6 + 1);
    dado2 = Math.floor(Math.random() * 6 + 1);
    total = dado1 + dado2;
    grava(dado1, dado2);
}

function grava(dado1, dado2) {

    total = dado1 + dado2;

    switch (total) {
        case 2:
            resultado[0][1] += 1;
            break;
        case 3:
            resultado[1][1] += 1;
            break;
        case 4:
            resultado[2][1] += 1;
            break;
        case 5:
            resultado[3][1] += 1;
            break;
        case 6:
            resultado[4][1] += 1;
            break;
        case 7:
            resultado[5][1] += 1;
            break;
        case 8:
            resultado[6][1] += 1;
            break;
        case 9:
            resultado[7][1] += 1;
            break;
        case 10:
            resultado[8][1] += 1;
            break;
        case 11:
            resultado[9][1] += 1;
            break;
        case 12:
            resultado[10][1] += 1;

            break;
    }

}

let a = 2;
for (let i = 0; i <= 12; i++) {
    document.getElementById(a).style.width = resultado[i][1] / 3.33 + "px";
    console.log(i);
    a++
}