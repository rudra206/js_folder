const heights =[65, 66,72,78,60,65,66];
function max (numbers){
    let max = numbers[0];
    for (const num of numbers){
    if(num > max){
        max = num;
    }
    }
    return max;
}
const max = getMax(heights);
console.log('Max value is', max);
