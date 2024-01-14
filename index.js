// 1.
let emptyArray = [];
emptyArray.push('zero', 1, false, 3.14, 'final');
console.log(emptyArray);

// 2.
let arbitNums = [5,10,15,20,25,30,35,40,45,50];
console.log(arbitNums);
for(let i = 0; i < arbitNums.length; i++){
    arbitNums[i] *= 3;
}
console.log(arbitNums);

// 3.
let filledArray = [2,7,3,6,7,2,1,5,98,3,6,54,3,8,5,4,3,6,73,45,9];
let targetArray = [];
filledArray.forEach(element => {
    if(element > 7){
        targetArray.push(element);
    }
});
console.log(targetArray);

// 4.
let it = 0;
let total = 0;
while(it < filledArray.length){
    total += filledArray[it];
    it++;
}
console.log(total);

// 5.
let suspects = ['Joker', 'Penguin', 'Two Face', 'Riddler', 'Blofeldt'];
suspects.forEach(element => {
    if(element === 'Penguin'){
        console.log(element);
    }
});

// 6.
suspects.length -= 1;
console.log(suspects);

// 7.
let num = 0;
for(let i = 0; i < arbitNums.length; i++){
    if(arbitNums[i] > num){
        num = arbitNums[i];
    }
}
console.log(num);

// 8.
let names = ['johnny', 'eric', 'lisa', 'anna', 'elsa'];
let copyNames = [];
names.forEach(name => {
    copyNames.push(name);
});
console.log(names, copyNames);

// 9.
while(copyNames.length > 0){
    copyNames.pop();
}
console.log(copyNames.length);