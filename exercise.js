'use strict'

//const sum = (mass) => null;   // пустая

/*
const sum =(mass)=>{
let sum = 0;
for(let elem of mass){             // не умеет конкатинировать
    sum+=elem;
}
return sum;
}
*/

/*const sum =(mass)=>{
    const reducer = (previousValue, currentValue) => previousValue + currentValue;        //все ок
return mass.reduce(reducer);
}
*/

const sum =(mass)=>{
    const reducer = (previousValue, currentValue) => previousValue + currentValue;        //проверьте типы
return mass.reduce(reducer).toString();
}

module.exports = sum;