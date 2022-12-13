"use strict";

let year = prompt('введите слово до 7 букв', '');
let massiv = 0
let a = [];
for(let i = 0; i < year.length; i++) {
    a[i] = ' * ';
}
let b = [];
let dlinna = year.length;
let bespoleznaya = a[dlinna]
bespoleznaya = '!!!'
let ogranichenie = dlinna - 1
if (dlinna > 7) {
    alert ('я же сказал не больше 7, проказник, но ладно, играем')
}
while (massiv < dlinna) {
    b[massiv] = year[massiv] 
    massiv++
}
massiv = 0
let sovpadayt = false
while (!sovpadayt) {
    let bukva = prompt(`угадай букву ${a.join('')}`, '');
    while (massiv < dlinna) {  
        if (b[massiv]===bukva) {
            a[massiv] = bukva;
        }
        massiv++ 
    }
    massiv = 0
    for (let index = 0; index < dlinna; index++){
        if(a[index] === b[index]){
            if (index === ogranichenie){
                sovpadayt = true
            }
        }
        else{
            break
        }
    }
    console.log('a', a)
    console.log('b', b)
}
massiv = 0
alert (a)

