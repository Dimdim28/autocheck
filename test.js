const sum = require('./exercise.js');
let valueErrors = 0;
let typeErrors = 0;

const array1 = {
input : [1,2,3,4,5],
output:15,
};
const array2 = {
input : [5,10,15,20],
output:50,
};
const array3 = {
input : [2,2,2,2],
output:8,
};
const array4 = {
    input : ['1','2','3'],
    output:'123',
    };

const arrays = [array1,array2,array3,array4];

for(const array of arrays){
    if(sum(array.input) != array.output){
        valueErrors++;
}
else if((sum(array.input) == array.output)&& (sum(array.input) !== array.output)){
    typeErrors++;
}
}
if(sum(array4.input) == null){
    console.log('\x1b[31m','Ваша функция пустая!');
}
    else{

if(sum(array4.input)!==array4.output){
    console.log('\x1b[31m','Ваша функция не умеет конкатинировать строки!');
}
else{

    if(valueErrors !=0){
        console.log('\x1b[31m','Проверьте правильность вычислений!');
    }
    else{
        if(typeErrors !=0){
            console.log('\x1b[31m', 'Проверьте типы переменных в вашей функции!');
        }
        else{
            console.log('\x1b[32m','Ура! Все работает))');
        }
    }
}
}
